import {RouterModule, Routes} from '@angular/router';
import {NgModule} from "@angular/core";
import {SettningsComponent} from "./components/settnings/settnings.component";

const routes: Routes = [
  {path: '', component: SettningsComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule {
}
