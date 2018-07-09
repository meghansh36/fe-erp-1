import { ComponentFactoryResolver, ComponentRef, Directive, Input, OnChanges, OnInit, Type, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { ButtonComponent } from '@L3Process/system/modules/formGenerator/components/Button/Button.component';
import { TextComponent } from '@L3Process/system/modules/formGenerator/components/Text/Text.component';
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
import { AnchorComponent } from '@L3Process/system/modules/formGenerator/components/Anchor/Anchor.component';
import { HiddenComponent } from '@L3Process/system/modules/formGenerator/components/Hidden/Hidden.component';
import { BlankComponent } from '@L3Process/system/modules/formGenerator/components/Blank/Blank.component';
import { HtmlEditorComponent } from '@L3Process/system/modules/formGenerator/components/HtmlEditor/HtmlEditor.component';
import { IconicButtonComponent } from '@L3Process/system/modules/formGenerator/components/IconicButton/IconicButton.component';

import { Field } from '@L1Process/system/modules/formGenerator/models/field.interface';
import { FieldConfig } from '@L1Process/system/modules/formGenerator/models/field-config.interface';

const components: { [type: string]: Type<Field> } = {
  BTN: ButtonComponent,
  TXT: TextComponent,
  SEL: SelectComponent,
  TXA: TextAreaComponent,
  DAT: DateComponent,
  TIM: TimeComponent,
  ACS: AutoCompleteComponent,
  NUM: NumberComponent,
  CHK: CheckBoxComponent,
  RAD: RadioComponent,
  MSL: MultiSelectComponent,
  EML: EmailComponent,
  FIL: FileComponent,
  FST: FieldSetComponent,
  ANC: AnchorComponent,
  BLK: BlankComponent,
  HID: HiddenComponent,
  ICB: IconicButtonComponent,
  EDT: HtmlEditorComponent
};

@Directive({
  selector: '[feField]'
})
export class FeFieldDirective implements Field, OnChanges, OnInit {
  @Input()
  config: FieldConfig;

  @Input()
  schema: any;

  @Input()
  group: FormGroup;

  @Input()
  form: any;

  @Input()
  formComponent: any;

  component: ComponentRef<Field>;

  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef
  ) { }

  ngOnChanges() {
    if (this.component) {
      this.component.instance.config = this.config;
      this.component.instance.group = this.group;
      this.component.instance.form = this.form;
      this.component.instance.formComponent = this.formComponent;
    }
  }

  ngOnInit() {
    if (!components[this.config.type]) {
      const supportedTypes = Object.keys(components).join(', ');
      throw new Error(
        `Trying to use an unsupported type (${this.config.type}).
        Supported types: ${supportedTypes}`
      );
    }

    const component = this.resolver.resolveComponentFactory<Field>(components[this.config.type]);
    this.component = this.container.createComponent(component);
    this.component.instance.config = this.config;
    this.component.instance.group = this.group;
    this.component.instance.form = this.form;
    this.component.instance.formComponent = this.formComponent;
    this.form.formComponent = this.formComponent;
    this.formComponent.componentInstances[ this.config.flexiLabel ] = this.component.instance;
  }
}
