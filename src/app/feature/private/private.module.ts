import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppRoutingModule} from "./private-routing.module";
import {PrivateSpaceComponent} from "./private-space/private-space/private-space.component";
import {HeaderComponent} from "./header/header.component";
import {SideMenuComponent} from "./side-menu/side-menu.component";



@NgModule({
  declarations: [
    PrivateSpaceComponent,
    HeaderComponent,
    SideMenuComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
  ]
})
export class PrivateModule { }
