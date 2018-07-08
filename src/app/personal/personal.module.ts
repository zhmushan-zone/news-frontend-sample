import { NgModule } from '@angular/core';
import { PersonalComponent } from './personal.component';
import { SharedModule } from '../shared/shared.module';
import { PersonalRoutingModule } from './personal.routes';
import { PersonalNavComponent } from './personal-nav/personal-nav.component';
import { PersonalCenterComponent } from './personal-center/personal-center.component';

@NgModule({
  imports: [
    SharedModule,
    PersonalRoutingModule
  ],
  declarations: [
    PersonalComponent,
    PersonalNavComponent,
    PersonalCenterComponent
  ]
})
export class PersonalModule { }
