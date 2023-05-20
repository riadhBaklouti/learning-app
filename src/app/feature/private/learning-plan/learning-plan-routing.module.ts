import {RouterModule, Routes} from '@angular/router';
import {NgModule} from "@angular/core";
import {LearningPlanComponent} from "./components/learning-plan/learning-plan.component";

const routes: Routes = [
  {path: '', component: LearningPlanComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LearningPlanRoutingModule {
}
