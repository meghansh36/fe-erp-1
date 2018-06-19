import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormRenderComponent } from '@L3Process/system/modules/form-render/form-render.component';

@NgModule({
  declarations: [
    FormRenderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [FormRenderComponent]
})
export class FeFormBuilderModule { }
