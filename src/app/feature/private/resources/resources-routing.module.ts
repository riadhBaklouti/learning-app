import {RouterModule, Routes} from '@angular/router';
import {NgModule} from "@angular/core";
import {ResourcesComponent} from "./components/resources/resources.component";

const routes: Routes = [
  {path: '', component: ResourcesComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResourcesRoutingModule {
}
