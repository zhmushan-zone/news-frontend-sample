import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalComponent } from './personal.component';
import { PersonalCenterComponent } from './personal-center/personal-center.component';

const routes: Routes = [
  {
    path: '',
    component: PersonalComponent,
    children: [
      {
        path: '',
        redirectTo: 'center',
        pathMatch: 'full'
      },
      {
        path: 'center',
        component: PersonalCenterComponent
      },
      {
        path: 'user',
        loadChildren: './personal-user/personal-user.module#PersonalUserModule'
      },
      {
        path: 'news',
        loadChildren: './personal-news/personal-news.module#PersonalNewsModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonalRoutingModule { }
