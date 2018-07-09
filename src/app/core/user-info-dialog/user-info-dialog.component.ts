import { Component, OnInit, Inject } from '@angular/core';
import { UserSex, User } from '../../models';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { ChangePassDialogComponent } from '../change-pass-dialog/change-pass-dialog.component';

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

  constructor(
    @Inject(MAT_DIALOG_DATA) public user: User,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
  }

}
