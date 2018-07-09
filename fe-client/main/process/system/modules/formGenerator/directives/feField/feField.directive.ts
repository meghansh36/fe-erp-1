import { ComponentFactoryResolver, ComponentRef, Directive, Input, OnChanges, OnInit, Type, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { ButtonComponent } from '@L1Process/system/modules/formGenerator/components/feButton/feButton.component';
import { TextComponent } from '@L1Process/system/modules/formGenerator/components/feText/feText.component';
import { TextAreaComponent } from '@L1Process/system/modules/formGenerator/components/feTextArea/feTextArea.component';
import { SelectComponent } from '@L1Process/system/modules/formGenerator/components/feSelect/feSelect.component';
import { MultiSelectComponent } from '@L1Process/system/modules/formGenerator/components/feMultiSelect/feMultiSelect.component';
import { DateComponent } from '@L1Process/system/modules/formGenerator/components/feDate/feDate.component';
import { TimeComponent } from '@L1Process/system/modules/formGenerator/components/feTime/feTime.component';
import { AutoCompleteComponent } from '@L1Process/system/modules/formGenerator/components/feAutoComplete/feAutoComplete.component';
import { NumberComponent } from '@L1Process/system/modules/formGenerator/components/feNumber/feNumber.component';
import { CheckBoxComponent } from '@L1Process/system/modules/formGenerator/components/feCheckBox/feCheckBox.component';
import { RadioComponent } from '@L1Process/system/modules/formGenerator/components/feRadio/feRadio.component';
import { FieldSetComponent } from '@L1Process/system/modules/formGenerator/components/feFieldSet/feFieldSet.component';
import { EmailComponent } from '@L1Process/system/modules/formGenerator/components/feEmail/feEmail.component';
import { FilComponent } from '@L1Process/system/modules/formGenerator/components/feFile/feFile.component';
import { AnchorComponent } from '@L1Process/system/modules/formGenerator/components/feAnchor/feAnchor.component';
import { HiddenComponent } from '@L1Process/system/modules/formGenerator/components/feHidden/feHidden.component';
import { BlankComponent } from '@L1Process/system/modules/formGenerator/components/feBlank/feBlank.component';
import { HtmlEditorComponent } from '@L1Process/system/modules/formGenerator/components/feHtmlEditor/feHtmlEditor.component';
import { IconicButtonComponent } from '@L1Process/system/modules/formGenerator/components/feIconicButton/feIconicButton.component';

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
  FIL: FilComponent,
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
export class FieldDirective implements Field, OnChanges, OnInit {
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
