import { NgModule } from '@angular/core';
import { PersonalComponent } from './personal.component';
import { SharedModule } from '../shared/shared.module';
import { PersonalRoutingModule } from './personal.routes';

@NgModule({
  imports: [
    SharedModule,
    PersonalRoutingModule
  ],
  declarations: [PersonalComponent]
})
export class PersonalModule { }
