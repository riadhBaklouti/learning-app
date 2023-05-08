import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageNotFoundComponent} from "./core/page-not-found/page-not-found.component";

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./feature/private/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'classes',
    loadChildren: () => import('./feature/private/classes/classes.module').then(m => m.ClassesModule)
  },
  {
    path: 'resources',
    loadChildren: () => import('./feature/private/resources/resources.module').then(m => m.ResourcesModule)
  },
  {
    path: 'learning-plan',
    loadChildren: () => import('./feature/private/learning-plan/learning-plan.module').then(m => m.LearningPlanModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./feature/private/chat/chat.module').then(m => m.ChatModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./feature/private/settings/settings.module').then(m => m.SettingsModule)
  },
  {
    path: 'landing',
    loadChildren: () => import('./feature/public/landing/landing.module').then(m => m.LandingModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./feature/public/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./feature/public/register/register.module').then(m => m.RegisterModule)
  },
  {
    path: 'forget-password',
    loadChildren: () => import('./feature/public/forget-password/forget-password.module').then(m => m.ForgetPasswordModule)
  },
  { path: '',   redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
