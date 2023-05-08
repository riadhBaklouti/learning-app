import { NgModule } from '@angular/core';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';



@NgModule({
  declarations: [
    ProgressBarComponent
  ],
  exports: [
    ProgressBarComponent
  ]
})
export class SharedModule { }
