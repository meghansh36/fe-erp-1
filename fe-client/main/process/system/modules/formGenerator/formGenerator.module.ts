import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FeFieldDirective } from './directives/feField/feField.directive';
import { FeFormComponent } from './components/feForm/feForm.component';
import { FeButtonComponent } from './components/feButton/feButton.component';
import { FeTextComponent } from './components/feText/feText.component';
import { FeTextAreaComponent } from './components/feTextArea/feTextArea.component';
import { FeSelectComponent } from './components/feSelect/feSelect.component';
import { FeMultiSelectComponent } from './components/feMultiSelect/feMultiSelect.component';
import { FeDateComponent } from './components/feDate/feDate.component';
import { FeTimeComponent } from './components/feTime/feTime.component';
import { FeAutoCompleteComponent } from './components/feAutoComplete/feAutoComplete.component';
import { FeNumberComponent } from './components/feNumber/feNumber.component';
import { FeCheckBoxComponent } from './components/feCheckBox/feCheckBox.component';
import { FeRadioComponent } from './components/feRadio/feRadio.component';
import { FeFieldSetComponent } from './components/feFieldSet/feFieldSet.component';
import { FeEmailComponent } from './components/feEmail/feEmail.component';
import { FeFilComponent } from './components/feFile/feFile.component';




@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgbModule
  ],
  declarations: [
    FeFieldDirective,
    FeFormComponent,
    FeButtonComponent,
    FeTextComponent,
    FeSelectComponent,
    FeTextAreaComponent,
    FeDateComponent,
    FeTimeComponent,
    FeAutoCompleteComponent,
    FeNumberComponent,
    FeCheckBoxComponent,
    FeRadioComponent,
    FeMultiSelectComponent,
    FeFieldSetComponent,
    FeEmailComponent,
    FeFilComponent,
  ],
  exports: [
    FeFormComponent
  ],
  entryComponents: [
    FeButtonComponent,
    FeTextComponent,
    FeSelectComponent,
    FeTextAreaComponent,
    FeDateComponent,
    FeTimeComponent,
    FeAutoCompleteComponent,
    FeNumberComponent,
    FeCheckBoxComponent,
    FeRadioComponent,
    FeMultiSelectComponent,
    FeFieldSetComponent,
    FeEmailComponent,
    FeFilComponent
  ]
})
export class FormGeneratorModule {}
