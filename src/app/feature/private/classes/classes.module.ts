import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ClassesComponent} from './components/classes/classes.component';
import {ClassesRoutingModule} from "./classes-routing.module";


@NgModule({
  declarations: [
    ClassesComponent
  ],
  imports: [
    CommonModule,
    ClassesRoutingModule,
  ]
})
export class ClassesModule {
}
