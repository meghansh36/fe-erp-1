import { NgModule,NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RenderComponent } from '@L3Process/system/modules/formRender/render/render.component';
import { TXTComponent } from '@L3Process/system/modules/formRender/render/components/TXT/txt.component';
import { TXAComponent } from '@L3Process/system/modules/formRender/render/components/TXA/txa.component';
import { BTNComponent } from '@L3Process/system/modules/formRender/render/components/BTN/btn.component';
import { ElementDirective } from '@L3Process/system/modules/formRender/render/components/TXT/directives/element.directive';
import { ButtonElementDirective } from '@L3Process/system/modules/formRender/render/components/BTN/directives/element.directive';
import { TextAreaElementDirective } from '@L3Process/system/modules/formRender/render/components/TXA/directives/element.directive';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [RenderComponent,TXTComponent,BTNComponent,TXAComponent,ElementDirective,ButtonElementDirective,TextAreaElementDirective],
  exports: [RenderComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class FeRenderModule {}
