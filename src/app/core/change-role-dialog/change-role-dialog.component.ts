import { Component, OnInit, Inject } from '@angular/core';
import { UserRole } from '../../models';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-change-role-dialog',
  templateUrl: './change-role-dialog.component.html',
  styleUrls: ['./change-role-dialog.component.scss']
})
export class ChangeRoleDialogComponent implements OnInit {

  roles = [
    {
      text: '普通用户',
      value: UserRole.USER
    },
    {
      text: '管理员',
      value: UserRole.ADMIN
    }
  ];

  constructor(
    @Inject(MAT_DIALOG_DATA) public role: UserRole,
  ) { }

  ngOnInit() {
  }

}
