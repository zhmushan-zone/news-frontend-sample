import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SharedModule } from '../shared/shared.module';
import { NavComponent } from './nav/nav.component';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../auth/auth.interceptor';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { RouterModule } from '@angular/router';
import { UserInfoDialogComponent } from './user-info-dialog/user-info-dialog.component';
import { ChangePassDialogComponent } from './change-pass-dialog/change-pass-dialog.component';

@NgModule({
  imports: [
    SharedModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  declarations: [
    ToolbarComponent,
    NavComponent,
    LoginDialogComponent,
    ConfirmDialogComponent,
    UserInfoDialogComponent,
    ChangePassDialogComponent,
  ],
  exports: [
    ToolbarComponent,
    NavComponent,
    LoginDialogComponent,
    ReactiveFormsModule,
  ],
  entryComponents: [
    LoginDialogComponent,
    ConfirmDialogComponent,
    UserInfoDialogComponent,
    ChangePassDialogComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ]
})
export class CoreModule { }
