// import { BrowserModule } from '@angular/platform-browser';
import { NgModule, SystemJsNgModuleLoader } from '@angular/core';

import { LazyComponent } from './lazy.component';

@NgModule({
  declarations: [
    LazyComponent
  ],
  exports: [
    LazyComponent
  ],
  imports: [
    // TODO: needs to be in "common modules"
    // BrowserModule
  ],
  providers: [],
  
  // NOTE: required in order to get NgFactory for the component to show up in the bundle.
  bootstrap: [LazyComponent]
})
export class LazyModule { }
