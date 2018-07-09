import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TextMaskModule } from 'angular2-text-mask';
import { EditorModule } from '@tinymce/tinymce-angular';
import { CKEditorModule } from 'ng2-ckeditor';
//import { SelectDropDownModule } from 'ngx-select-dropdown';
import { NgxSelectModule, INgxSelectOptions } from 'ngx-select-ex';

import { FieldDirective } from '@L3Process/system/modules/formGenerator/directives/feField/feField.directive';
import { FormComponent } from '@L3Process/system/modules/formGenerator/components/feForm/feForm.component';
import { ButtonComponent } from '@L3Process/system/modules/formGenerator/components/feButton/feButton.component';
import { TextComponent } from '@L3Process/system/modules/formGenerator/components/feText/feText.component';
import { TextAreaComponent } from '@L3Process/system/modules/formGenerator/components/feTextArea/feTextArea.component';
import { SelectComponent } from '@L3Process/system/modules/formGenerator/components/feSelect/feSelect.component';
import { MultiSelectComponent } from '@L3Process/system/modules/formGenerator/components/feMultiSelect/feMultiSelect.component';
import { DateComponent } from '@L3Process/system/modules/formGenerator/components/feDate/feDate.component';
import { TimeComponent } from '@L3Process/system/modules/formGenerator/components/feTime/feTime.component';
import { AutoCompleteComponent } from '@L3Process/system/modules/formGenerator/components/feAutoComplete/feAutoComplete.component';
import { NumberComponent } from '@L3Process/system/modules/formGenerator/components/feNumber/feNumber.component';
import { CheckBoxComponent } from '@L3Process/system/modules/formGenerator/components/feCheckBox/feCheckBox.component';
import { RadioComponent } from '@L3Process/system/modules/formGenerator/components/feRadio/feRadio.component';
import { FieldSetComponent } from '@L3Process/system/modules/formGenerator/components/feFieldSet/feFieldSet.component';
import { EmailComponent } from '@L3Process/system/modules/formGenerator/components/feEmail/feEmail.component';
import { FilComponent } from '@L3Process/system/modules/formGenerator/components/feFile/feFile.component';
import { HiddenComponent } from '@L3Process/system/modules/formGenerator/components/feHidden/feHidden.component';
import { MonthComponent } from '@L3Process/system/modules/formGenerator/components/feMonth/feMonth.component';
import { AnchorComponent } from '@L3Process/system/modules/formGenerator/components/feAnchor/feAnchor.component';
import { BlankComponent } from '@L3Process/system/modules/formGenerator/components/feBlank/feBlank.component';
import { HtmlEditorComponent } from '@L3Process/system/modules/formGenerator/components/feHtmlEditor/feHtmlEditor.component';
import { IconicButtonComponent } from '@L3Process/system/modules/formGenerator/components/feIconicButton/feIconicButton.component';

const CustomSelectOptions: INgxSelectOptions = { // Check the interface for more options
  optionValueField: 'code',
  optionTextField: 'meaning'
};

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgbModule,
    TextMaskModule,
    EditorModule,
    CKEditorModule,
    NgxSelectModule.forRoot(CustomSelectOptions)
  ],
  declarations: [
    FieldDirective,
    FormComponent,
    ButtonComponent,
    TextComponent,
    SelectComponent,
    TextAreaComponent,
    DateComponent,
    TimeComponent,
    AutoCompleteComponent,
    NumberComponent,
    CheckBoxComponent,
    RadioComponent,
    MultiSelectComponent,
    FieldSetComponent,
    EmailComponent,
    FilComponent,
    HiddenComponent,
    MonthComponent,
    AnchorComponent,
    BlankComponent,
    IconicButtonComponent,
    HtmlEditorComponent
  ],
  exports: [
    FormComponent,
    ButtonComponent,
    TextComponent,
    SelectComponent,
    TextAreaComponent,
    DateComponent,
    TimeComponent,
    AutoCompleteComponent,
    NumberComponent,
    CheckBoxComponent,
    RadioComponent,
    MultiSelectComponent,
    FieldSetComponent,
    EmailComponent,
    FilComponent
  ],
  entryComponents: [
    ButtonComponent,
    TextComponent,
    SelectComponent,
    TextAreaComponent,
    DateComponent,
    TimeComponent,
    AutoCompleteComponent,
    NumberComponent,
    CheckBoxComponent,
    RadioComponent,
    MultiSelectComponent,
    FieldSetComponent,
    EmailComponent,
    FilComponent,
    HiddenComponent,
    MonthComponent,
    AnchorComponent,
    BlankComponent,
    IconicButtonComponent,
    HtmlEditorComponent
  ]
})
export class FormGeneratorModule {}
