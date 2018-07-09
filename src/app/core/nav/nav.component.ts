import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models';
import { MatDialog, MatSnackBar } from '@angular/material';
import { ConfirmDialogComponent, ConfirmDialogData } from '../confirm-dialog/confirm-dialog.component';
import { Router } from '@angular/router';

export interface Menu {
  link: string;
  title: string;
}

export enum NavMode {
  NAV,
  LOGIN,
  PERSONAL
}

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  @Output()
  linkClick = new EventEmitter<NavMode>();

  navMode = NavMode;
  user: User;

  menus: Menu[] = [
    {
      link: '/news',
      title: '主页'
    }
  ];

  logout() {
    const confirmDialog = this.dialog.open(ConfirmDialogComponent, {
      data: <ConfirmDialogData>{
        title: '注销',
        content: '你确定吗?'
      }
    });
    confirmDialog.afterClosed().subscribe(res => {
      if (res) {
        this.userService.logout().subscribe(() => {
          localStorage.removeItem('token');
          this.userService.user = null;
          this.snackBar.open('注销成功');
          this.router.navigate(['/news']);
        });
      }
    });
  }

  constructor(
    public userService: UserService,
    public snackBar: MatSnackBar,
    public dialog: MatDialog,
    public router: Router
  ) {
  }

  ngOnInit() {
  }

}
