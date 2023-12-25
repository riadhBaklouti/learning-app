import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'landing',
    loadChildren: () => import('./landing/landing.module').then(m => m.LandingModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then(m => m.RegisterModule)
  },
  {
    path: 'forget-password',
    loadChildren: () => import('./forget-password/forget-password.module').then(m => m.ForgetPasswordModule)
  },
  { path: '',   redirectTo: '/landing', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
