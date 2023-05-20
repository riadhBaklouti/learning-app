import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ResourcesComponent} from './components/resources/resources.component';
import {ResourcesRoutingModule} from "./resources-routing.module";


@NgModule({
  declarations: [
    ResourcesComponent
  ],
  imports: [
    CommonModule,
    ResourcesRoutingModule,
  ]
})
export class ResourcesModule {
}
