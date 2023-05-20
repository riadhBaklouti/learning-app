import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LearningPlanComponent} from './components/learning-plan/learning-plan.component';
import {LearningPlanRoutingModule} from "./learning-plan-routing.module";


@NgModule({
  declarations: [
    LearningPlanComponent
  ],
  imports: [
    CommonModule,
    LearningPlanRoutingModule
  ]
})
export class LearningPlanModule {
}
