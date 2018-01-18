import { BrowserModule } from '@angular/platform-browser';
import { NgModule, SystemJsNgModuleLoader } from '@angular/core';

import { LazyComponent } from './lazy.component';

@NgModule({
  declarations: [
    LazyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
//   bootstrap: []
})
export class LazyModule { }
