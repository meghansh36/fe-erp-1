import { NgModule } from '@angular/core';
import { FormsModule ,ReactiveFormsModule}   from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { FormRenderComponent } from '@L3Process/system/modules/formRender/formRender.component';

import { RenderModule } from '@L3Process/system/modules/formRender/render/render.module';
import { RenderService } from '@L3Process/system/modules/formRender/render/services/render.service';
import { AllCompService } from '@L3Process/system/modules/formRender/render/services/all-comp.service'
import { TXTComponent } from '@L3Process/system/modules/formRender/render/components/TXT/txt.component';
import { TXAComponent } from '@L3Process/system/modules/formRender/render/components/TXA/txa.component';
import { BTNComponent } from '@L3Process/system/modules/formRender/render/components/BTN/btn.component';
import { SELComponent } from '@L3Process/system/modules/formRender/render/components/SEL/sel.component';
import { DATComponent } from '@L3Process/system/modules/formRender/render/components/DAT/dat.component';
import { NUMComponent } from '@L3Process/system/modules/formRender/render/components/NUM/num.component';
import { FILComponent } from '@L3Process/system/modules/formRender/render/components/FIL/fil.component';
import { TIMComponent } from '@L3Process/system/modules/formRender/render/components/TIM/tim.component';

import { routes } from '@L3Process/system/modules/formRender/formRender.routing';
@NgModule({
  declarations: [
    FormRenderComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    RenderModule,
    RouterModule.forChild(routes)
  ],
  providers: [RenderService,AllCompService],
  entryComponents: [TXTComponent,BTNComponent,TXAComponent,SELComponent,DATComponent,NUMComponent,FILComponent,TIMComponent]
})
export class FeFormRenderModule { }
