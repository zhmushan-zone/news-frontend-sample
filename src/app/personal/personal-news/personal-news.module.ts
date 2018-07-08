import { NgModule } from '@angular/core';
import { PersonalNewsComponent } from './personal-news.component';
import { SharedModule } from '../../shared/shared.module';
import { PersonalNewsRoutingModule } from './personal-news.routes';

@NgModule({
  imports: [
    SharedModule,
    PersonalNewsRoutingModule
  ],
  declarations: [PersonalNewsComponent]
})
export class PersonalNewsModule { }
