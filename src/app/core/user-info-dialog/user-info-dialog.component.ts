import { Component, OnInit, Inject } from '@angular/core';
import { UserSex, User, UserRole } from '../../models';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { ChangePassDialogComponent } from '../change-pass-dialog/change-pass-dialog.component';
import { UserService } from '../../services/user.service';
import { ChangeRoleDialogComponent } from '../change-role-dialog/change-role-dialog.component';

@Component({
  selector: 'app-user-info-dialog',
  templateUrl: './user-info-dialog.component.html',
  styleUrls: ['./user-info-dialog.component.scss']
})
export class UserInfoDialogComponent implements OnInit {

  userSex = UserSex;

  changePass() {
    const changePassDialog = this.dialog.open(ChangePassDialogComponent, { disableClose: true });
    changePassDialog.afterClosed().subscribe(pass => pass && (this.user.password = pass));
  }

  changeRole() {
    const changeRoleDialog = this.dialog.open(ChangeRoleDialogComponent, { disableClose: true, data: this.user.role });
    changeRoleDialog.afterClosed().subscribe(role => (role === UserRole.ADMIN || role === UserRole.USER) && (this.user.role = role));
  }

  constructor(
    @Inject(MAT_DIALOG_DATA) public user: User,
    public dialog: MatDialog,
    public userService: UserService
  ) { }

  ngOnInit() {
  }

}
