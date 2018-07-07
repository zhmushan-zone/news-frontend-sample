import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'index'
  },
  {
    path: 'index',
    loadChildren: './index/index.module#IndexModule'
  },
  {
    path: 'personal',
    loadChildren: './personal/personal.module#PersonalModule'
  }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRtoutesModule { }
