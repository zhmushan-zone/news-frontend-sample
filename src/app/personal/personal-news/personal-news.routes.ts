import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalNewsComponent } from './personal-news.component';

const routes: Routes = [
  { path: '', component: PersonalNewsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonalNewsRoutingModule {}
