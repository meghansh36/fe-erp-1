import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ReactiveFormsModule } from '@angular/forms';
import { RenderComponent } from '@L3Process/system/modules/formRender/render/render.component';
import { TXTComponent } from '@L3Process/system/modules/formRender/render/components/TXT/txt.component';
import { SELComponent } from '@L3Process/system/modules/formRender/render/components/SEL/sel.component';
import { TXAComponent } from '@L3Process/system/modules/formRender/render/components/TXA/txa.component';
import { BTNComponent } from '@L3Process/system/modules/formRender/render/components/BTN/btn.component';
import { DATComponent } from '@L3Process/system/modules/formRender/render/components/DAT/dat.component';
import { NUMComponent } from '@L3Process/system/modules/formRender/render/components/NUM/num.component';
import { FILComponent } from '@L3Process/system/modules/formRender/render/components/FIL/fil.component';
import { TIMComponent } from '@L3Process/system/modules/formRender/render/components/TIM/tim.component';
import { ElementDirective } from '@L3Process/system/modules/formRender/render/components/TXT/directives/element.directive';
import { ButtonElementDirective } from '@L3Process/system/modules/formRender/render/components/BTN/directives/element.directive';
import { TextAreaElementDirective } from '@L3Process/system/modules/formRender/render/components/TXA/directives/element.directive';
import { SelectElementDirective } from '@L3Process/system/modules/formRender/render/components/SEL/directives/element.directive';
import { DATElementDirective } from '@L3Process/system/modules/formRender/render/components/DAT/directives/element.directive';
import { NUMElementDirective } from '@L3Process/system/modules/formRender/render/components/NUM/directives/element.directive';
import { FILElementDirective } from '@L3Process/system/modules/formRender/render/components/FIL/directives/element.directive';
import { TIMElementDirective } from '@L3Process/system/modules/formRender/render/components/TIM/directives/element.directive';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, NgbModule],
  declarations: [
    RenderComponent,
    TXTComponent,
    BTNComponent,
    TXAComponent,
    SELComponent,
    NUMComponent,
    DATComponent,
    FILComponent,
    TIMComponent,
    ElementDirective,
    ButtonElementDirective,
    TextAreaElementDirective,
    SelectElementDirective,
    DATElementDirective,
    NUMElementDirective,
    FILElementDirective,
    TIMElementDirective
  ],
  exports: [RenderComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class FeRenderModule { }
