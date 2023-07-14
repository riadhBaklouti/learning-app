import { NgModule } from '@angular/core';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { LanguageLevelItemComponent } from './language-level-item/language-level-item.component';
import { ReminderItemComponent } from './reminder-item/reminder-item.component';



@NgModule({
  declarations: [
    ProgressBarComponent,
    LanguageLevelItemComponent,
    ReminderItemComponent
  ],
  exports: [
    ProgressBarComponent,
    LanguageLevelItemComponent,
    ReminderItemComponent
  ]
})
export class SharedModule { }
