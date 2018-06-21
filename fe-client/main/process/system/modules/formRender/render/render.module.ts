import { NgModule,NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RenderComponent } from './render.component';
import { TXTComponent } from './components/TXT/txt.component';
import { ElementDirective } from './components/TXT/directives/element.directive';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [RenderComponent,TXTComponent,ElementDirective],
  exports: [RenderComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class RenderModule {}
