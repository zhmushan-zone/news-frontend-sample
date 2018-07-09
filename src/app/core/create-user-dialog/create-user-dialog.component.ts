import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { UserService } from '../../services/user.service';
import { ResponseCode } from '../../models';

@Component({
  selector: 'app-create-user-dialog',
  templateUrl: './create-user-dialog.component.html',
  styleUrls: ['./create-user-dialog.component.scss']
})
export class CreateUserDialogComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    public dialogRef: MatDialogRef<CreateUserDialogComponent>,
    public userService: UserService,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  register() {
    const user = this.loginForm.value;
    this.userService.register(user).subscribe(res => {
      switch (res.code) {
        case ResponseCode.SUCCESS:
          this.snackBar.open('注册成功', '确定');
          this.dialogRef.close(res.data);
          break;
        case ResponseCode.EXISIT:
          this.snackBar.open('用户名已存在', '确定');
          break;
      }
    });
  }
}
