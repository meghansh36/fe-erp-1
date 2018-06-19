import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormBuilderComponent } from '@L3Process/system/modules/form-builder/form-builder.component';

@NgModule({
  declarations: [
    FormBuilderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [FormBuilderComponent]
})
export class FeFormBuilderModule { }
