import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule ,ReactiveFormsModule}   from '@angular/forms';

import { FeFormRenderComponent } from '@L1Process/system/modules/form-render/form-render.component';

import { RenderModule } from './render/render.module';
import { RenderService } from './render/services/render.service';
import { AllCompService } from './render/services/all-comp.service'
import { TXTComponent } from './render/components/TXT/txt.component';
import { TextareaComponent } from './render/components/textarea/textarea.component';
import { BTNComponent } from './render/components/BTN/btn.component';

@NgModule({
  declarations: [
    FeFormRenderComponent,
    TextareaComponent,
    BTNComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RenderModule
  ],
  providers: [RenderService,AllCompService],
  bootstrap: [FeFormRenderComponent],
  entryComponents: [TXTComponent,BTNComponent]
})
export class FeFormRenderModule { }
