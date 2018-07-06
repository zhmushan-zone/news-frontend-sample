import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SharedModule } from '../shared/shared.module';
import { NavComponent } from './nav/nav.component';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    SharedModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [
    ToolbarComponent,
    NavComponent,
    LoginDialogComponent
  ],
  exports: [
    ToolbarComponent,
    NavComponent,
    LoginDialogComponent,
    ReactiveFormsModule
  ],
  entryComponents: [
    LoginDialogComponent
  ]
})
export class CoreModule { }
