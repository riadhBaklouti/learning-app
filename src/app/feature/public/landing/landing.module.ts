import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { LandingHomeComponent } from './sections/landing-home/landing-home.component';
import { LandingNavComponent } from './sections/landing-nav/landing-nav.component';
import {RouterModule, Routes} from "@angular/router";
import { LandingAboutUsComponent } from './sections/landing-about-us/landing-about-us.component';

var routes: Routes = [
  {
    path: '',
    component: LandingComponent,
  }
];


@NgModule({
  declarations: [
    LandingComponent,
    LandingHomeComponent,
    LandingNavComponent,
    LandingAboutUsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class LandingModule { }
