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
import { CreateUserDialogComponent } from './create-user-dialog/create-user-dialog.component';
import { ChangeRoleDialogComponent } from './change-role-dialog/change-role-dialog.component';
import { NewsInfoDialogComponent } from './news-info-dialog/news-info-dialog.component';

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
    CreateUserDialogComponent,
    ChangeRoleDialogComponent,
    NewsInfoDialogComponent,
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
    ChangePassDialogComponent,
    CreateUserDialogComponent,
    ChangeRoleDialogComponent,
    NewsInfoDialogComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ]
})
export class CoreModule { }
