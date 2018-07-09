import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User, ResponseCode } from '../../models';
import { MatSnackBar, MatDialog } from '@angular/material';
import { ChangePassDialogComponent } from '../../core/change-pass-dialog/change-pass-dialog.component';
import { ProgressService } from '../../services/progress.service';

@Component({
  selector: 'app-personal-center',
  templateUrl: './personal-center.component.html',
  styleUrls: ['./personal-center.component.scss']
})
export class PersonalCenterComponent implements OnInit {

  user: User;

  save() {
    this.userService.update(this.user).subscribe(res => {
      switch (res.code) {
        case ResponseCode.SUCCESS:
          this.userService.user = res.data;
          localStorage.setItem('token', res.data.token);
          this.snackBar.open('修改成功');
          break;
        case ResponseCode.NO_PERMISSION:
          this.snackBar.open('权限不足');
          break;
        case ResponseCode.NOT_EXISIT:
          this.snackBar.open('用户不存在');
          break;
      }
    });
  }

  changePass() {
    const changePassDialog = this.dialog.open(ChangePassDialogComponent, { disableClose: true });
    changePassDialog.afterClosed().subscribe(async pass => {
      if (pass) {
        this.progressService.isShow = true;
        const user = new User(this.user);
        user.password = pass;
        await this.userService.update(user).subscribe(res => {
          switch (res.code) {
            case ResponseCode.SUCCESS:
              this.snackBar.open('修改成功');
              break;
            case ResponseCode.NOT_EXISIT:
              this.snackBar.open('用户不存在');
              break;
            case ResponseCode.NO_PERMISSION:
              this.snackBar.open('权限不足');
              break;
          }
        });
        this.progressService.isShow = false;
      }
    });
  }

  constructor(
    public userService: UserService,
    public snackBar: MatSnackBar,
    public dialog: MatDialog,
    public progressService: ProgressService
  ) {
    this.user = new User(userService.user);
  }

  ngOnInit() {
  }

}
