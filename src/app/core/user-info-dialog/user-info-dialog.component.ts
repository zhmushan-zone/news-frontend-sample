import { Component, OnInit, Inject } from '@angular/core';
import { UserSex, User } from '../../models';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-user-info-dialog',
  templateUrl: './user-info-dialog.component.html',
  styleUrls: ['./user-info-dialog.component.scss']
})
export class UserInfoDialogComponent implements OnInit {

  userSex = UserSex;

  constructor(
    @Inject(MAT_DIALOG_DATA) public user: User
  ) { }

  ngOnInit() {
  }

}
