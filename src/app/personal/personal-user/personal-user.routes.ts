import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalUserComponent } from './personal-user.component';

const routes: Routes = [
  { path: '', component: PersonalUserComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonalUserRoutingModule {}
