import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FeFieldDirective } from './directives/feField/feField.directive';
import { FeFormComponent } from './components/feForm/feForm.component';
import { FeButtonComponent } from './components/feButton/feButton.component';
import { FeTextComponent } from './components/feText/feText.component';
import { FeSelectComponent } from './components/feSelect/feSelect.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    FeFieldDirective,
    FeFormComponent,
    FeButtonComponent,
    FeTextComponent,
    FeSelectComponent
  ],
  exports: [
    FeFormComponent
  ],
  entryComponents: [
    FeButtonComponent,
    FeTextComponent,
    FeSelectComponent
  ]
})
export class FormGeneratorModule {}
