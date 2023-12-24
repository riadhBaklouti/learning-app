import {NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {RouterLinkWithHref} from "@angular/router";



@NgModule({
  declarations: [
    PageNotFoundComponent,
  ],
  imports: [
    CommonModule,
    NgOptimizedImage,
    RouterLinkWithHref
  ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() coreModule: CoreModule) {
    if (coreModule) {
      throw new TypeError(`coreModule should be imported only once.`);
    }
  }
}
