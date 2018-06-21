import { NgModule } from '@angular/core';
import { FormsModule ,ReactiveFormsModule}   from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { FormRenderComponent } from '@L3Process/system/modules/formRender/formRender.component';

import { RenderModule } from '@L3Process/system/modules/formRender/render/render.module';
import { RenderService } from '@L3Process/system/modules/formRender/render/services/render.service';
import { AllCompService } from '@L3Process/system/modules/formRender/render/services/all-comp.service'
import { TXTComponent } from '@L3Process/system/modules/formRender/render/components/TXT/txt.component';
//import { TextareaComponent } from '@L3Process/system/modules/formRender/render/components/textarea/textarea.component';
import { BTNComponent } from '@L3Process/system/modules/formRender/render/components/BTN/btn.component';

import { routes } from '@L3Process/system/modules/formRender/formRender.routing';
@NgModule({
  declarations: [
    FormRenderComponent,
    BTNComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    RenderModule,
    RouterModule.forChild(routes)
  ],
  providers: [RenderService,AllCompService],
  entryComponents: [TXTComponent,BTNComponent]
})
export class FeFormRenderModule { }
