import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageNotFoundComponent} from "./core/page-not-found/page-not-found.component";

const routes: Routes = [
  {
    path: 'public',
    loadChildren: () => import('./feature/public/public.module').then(m => m.PublicModule),
  },
  {
    path: 'private',
    loadChildren: () => import('./feature/private/private.module').then(m => m.PrivateModule),
  },
  { path: '',   redirectTo: '/public/landing', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
