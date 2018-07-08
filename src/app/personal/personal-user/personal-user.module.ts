import { NgModule } from '@angular/core';
import { PersonalUserComponent } from './personal-user.component';
import { SharedModule } from '../../shared/shared.module';
import { PersonalUserRoutingModule } from './personal-user.routes';

@NgModule({
  imports: [
    SharedModule,
    PersonalUserRoutingModule
  ],
  declarations: [PersonalUserComponent]
})
export class PersonalUserModule { }
