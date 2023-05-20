import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SettningsComponent} from './components/settnings/settnings.component';
import {SettingsRoutingModule} from "./settings-routing.module";


@NgModule({
  declarations: [
    SettningsComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
  ]
})
export class SettingsModule {
}
