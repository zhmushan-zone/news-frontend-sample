import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { ResponseCode } from '../../models';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    public dialogRef: MatDialogRef<LoginDialogComponent>,
    public snackBar: MatSnackBar,
    public userService: UserService
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  login() {
    const user = this.loginForm.value;
    this.userService.login(user).subscribe(res => {
      switch (res.code) {
        case ResponseCode.SUCCESS:
          this.snackBar.open('登录成功', '确定');
          localStorage.setItem('token', res.data.token);
          this.dialogRef.close(res.data);
          break;
        case ResponseCode.LOGIN_FAILED:
          this.snackBar.open('用户名或密码错误', '确定');
          break;
      }
    });
  }

  register() {
    const user = this.loginForm.value;
    this.userService.register(user).subscribe(res => {
      switch (res.code) {
        case ResponseCode.SUCCESS:
          this.snackBar.open('注册成功', '确定');
          localStorage.setItem('token', res.data.token);
          this.dialogRef.close(res.data);
          break;
        case ResponseCode.EXISIT:
          this.snackBar.open('用户名已存在', '确定');
          break;
      }
    });
  }
}
