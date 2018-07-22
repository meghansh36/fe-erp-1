import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TextMaskModule } from 'angular2-text-mask';
import { EditorModule } from '@tinymce/tinymce-angular';
import { CKEditorModule } from 'ng2-ckeditor';
import { NgxSelectModule, INgxSelectOptions } from 'ngx-select-ex';
import { DefaultsService } from '@L3Process/system/services/Defaults.service';

import { FieldDirective } from '@L3Process/system/modules/formGenerator/directives/Field/Field.directive';
import { FormComponent } from '@L3Process/system/modules/formGenerator/components/Form/Form.component';
import { ButtonComponent } from '@L3Process/system/modules/formGenerator/components/Button/Button.component';
import { TextComponent } from '@L3Process/system/modules/formGenerator/components/Text/Text.component';
import { PasswordComponent } from '@L3Process/system/modules/formGenerator/components/Password/Password.component';
import { TextAreaComponent } from '@L3Process/system/modules/formGenerator/components/TextArea/TextArea.component';
import { SelectComponent } from '@L3Process/system/modules/formGenerator/components/Select/Select.component';
import { MultiSelectComponent } from '@L3Process/system/modules/formGenerator/components/MultiSelect/MultiSelect.component';
import { DateComponent } from '@L3Process/system/modules/formGenerator/components/Date/Date.component';
import { TimeComponent } from '@L3Process/system/modules/formGenerator/components/Time/Time.component';
import { AutoCompleteComponent } from '@L3Process/system/modules/formGenerator/components/AutoComplete/AutoComplete.component';
import { NumberComponent } from '@L3Process/system/modules/formGenerator/components/Number/Number.component';
import { CheckBoxComponent } from '@L3Process/system/modules/formGenerator/components/CheckBox/CheckBox.component';
import { RadioComponent } from '@L3Process/system/modules/formGenerator/components/Radio/Radio.component';
import { FieldSetComponent } from '@L3Process/system/modules/formGenerator/components/FieldSet/FieldSet.component';
import { EmailComponent } from '@L3Process/system/modules/formGenerator/components/Email/Email.component';
import { FileComponent } from '@L3Process/system/modules/formGenerator/components/File/File.component';
import { HiddenComponent } from '@L3Process/system/modules/formGenerator/components/Hidden/Hidden.component';
import { MonthComponent } from '@L3Process/system/modules/formGenerator/components/Month/Month.component';
import { AnchorComponent } from '@L3Process/system/modules/formGenerator/components/Anchor/Anchor.component';
import { BlankComponent } from '@L3Process/system/modules/formGenerator/components/Blank/Blank.component';
import { HtmlEditorComponent } from '@L3Process/system/modules/formGenerator/components/HtmlEditor/HtmlEditor.component';
import { IconicButtonComponent } from '@L3Process/system/modules/formGenerator/components/IconicButton/IconicButton.component';
import { FormButtonsComponent } from '@L3Process/system/modules/formGenerator/components/FormButtons/FormButton.component';
import { CurrencyComponent } from '@L3Process/system/modules/formGenerator/components/currency/currency.component';
import { PhoneComponent } from '@L3Process/system/modules/formGenerator/components/phone/phone.component';
import { AddressComponent } from '@L3Process/system/modules/formGenerator/components/address/address.component';

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
    NgxSelectModule.forRoot(CustomSelectOptions),
  ],
  declarations: [
    FieldDirective,
    FormComponent,
    ButtonComponent,
    TextComponent,
    PasswordComponent,
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
    FileComponent,
    HiddenComponent,
    MonthComponent,
    AnchorComponent,
    BlankComponent,
    IconicButtonComponent,
    HtmlEditorComponent,
    FormButtonsComponent,
    CurrencyComponent,
    PhoneComponent,
    AddressComponent
  ],
  exports: [
    FormComponent,
    ButtonComponent,
    TextComponent,
    PasswordComponent,
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
    FileComponent,
    FormButtonsComponent,
    CurrencyComponent,
    PhoneComponent,
    AddressComponent,
    HtmlEditorComponent
  ],
  entryComponents: [
    ButtonComponent,
    TextComponent,
    PasswordComponent,
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
    FileComponent,
    HiddenComponent,
    MonthComponent,
    AnchorComponent,
    BlankComponent,
    IconicButtonComponent,
    HtmlEditorComponent,
    FormButtonsComponent,
    CurrencyComponent,
    PhoneComponent,
    AddressComponent,
  ],
  providers: [ DefaultsService ],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})
export class FeFormGeneratorModule {}
