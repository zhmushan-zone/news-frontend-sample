import { NgModule } from '@angular/core';
import { PersonalComponent } from './personal.component';
import { SharedModule } from '../shared/shared.module';
import { PersonalRoutingModule } from './personal.routes';
import { PersonalNavComponent } from './personal-nav/personal-nav.component';
import { PersonalMainComponent } from './personal-main/personal-main.component';

@NgModule({
  imports: [
    SharedModule,
    PersonalRoutingModule
  ],
  declarations: [PersonalComponent, PersonalNavComponent, PersonalMainComponent]
})
export class PersonalModule { }
