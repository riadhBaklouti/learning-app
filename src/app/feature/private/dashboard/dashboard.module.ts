import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './components/dashboard-main/dashboard.component';
import {DashboardRoutingModule} from "./dashboard-routing.module";
import {SharedModule} from "../../../shared/shared.module";
import { ProfileSectionComponent } from './components/profile-section/profile-section.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ProfileSectionComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule {
}
