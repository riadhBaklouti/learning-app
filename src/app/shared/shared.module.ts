import { NgModule } from '@angular/core';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { LanguageLevelItemComponent } from './language-level-item/language-level-item.component';
import { ReminderItemComponent } from './reminder-item/reminder-item.component';
import {NgClass} from "@angular/common";



@NgModule({
    declarations: [
        ProgressBarComponent,
        LanguageLevelItemComponent,
        ReminderItemComponent
    ],
    imports: [
        NgClass
    ],
    exports: [
        ProgressBarComponent,
        LanguageLevelItemComponent,
        ReminderItemComponent
    ]
})
export class SharedModule { }
