import { Component } from '@angular/core';
import { NavMode } from './core/nav/nav.component';
import { LoginDialogComponent } from './core/login-dialog/login-dialog.component';
import { MatDialog, MatSnackBar } from '@angular/material';
import { ResponseCode } from './models';
import { UserService } from './services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    public dialog: MatDialog,
    public snackBar: MatSnackBar,
    public userService: UserService,
    public router: Router
  ) {
    this.initial();
  }

  initial() {
    const token = localStorage.getItem('token');
    if (token) {
      this.userService.auth().subscribe(res => {
        switch (res.code) {
          case ResponseCode.SUCCESS:
            localStorage.setItem('token', res.data.token);
            this.userService.user = res.data;
            break;
          case ResponseCode.TOKEN_EXPIRED:
            this.snackBar.open('Token已失效, 清重新登录');
            break;
        }
      });
    }
  }

  navClicked(mode: NavMode) {
    switch (mode) {
      case NavMode.LOGIN:
        this.loginDialogOpen();
        break;
      case NavMode.PERSONAL_CENTER:
        this.router.navigate(['personal']);
        break;
    }
  }

  loginDialogOpen() {
    const loginDialog = this.dialog.open(LoginDialogComponent);
    loginDialog.afterClosed().subscribe(user => {
      this.userService.user = user;
    });
  }
}
