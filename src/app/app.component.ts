import { Component } from '@angular/core';
import { NavMode } from './core/nav/nav.component';
import { LoginDialogComponent } from './core/login-dialog/login-dialog.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    public dialog: MatDialog
  ) { }

  navClicked(mode: NavMode) {
    switch (mode) {
      case NavMode.login:
        this.loginDialogOpen();
        break;
    }
  }

  loginDialogOpen() {
    this.dialog.open(LoginDialogComponent);
  }
}
