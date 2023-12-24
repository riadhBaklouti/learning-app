import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PrivateSpaceComponent} from "./private-space/private-space/private-space.component";

const routes: Routes = [
  {
    path: '',
    component: PrivateSpaceComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'classes',
        loadChildren: () => import('./classes/classes.module').then(m => m.ClassesModule)
      },
      {
        path: 'resources',
        loadChildren: () => import('./resources/resources.module').then(m => m.ResourcesModule)
      },
      {
        path: 'learning-plan',
        loadChildren: () => import('./learning-plan/learning-plan.module').then(m => m.LearningPlanModule)
      },
      {
        path: 'chat',
        loadChildren: () => import('./chat/chat.module').then(m => m.ChatModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule)
      },
    ]
  },
  { path: '',   redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
