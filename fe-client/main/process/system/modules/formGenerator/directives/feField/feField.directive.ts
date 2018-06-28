import { ComponentFactoryResolver, ComponentRef, Directive, Input, OnChanges, OnInit, Type, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FeButtonComponent } from '../../components/feButton/feButton.component';
import { FeTextComponent } from '../../components/feText/feText.component';
import { FeTextAreaComponent } from '../../components/feTextArea/feTextArea.component';
import { FeSelectComponent } from '../../components/feSelect/feSelect.component';
import { FeMultiSelectComponent } from '../../components/feMultiSelect/feMultiSelect.component';
import { FeDateComponent } from '../../components/feDate/feDate.component';
import { FeTimeComponent } from '../../components/feTime/feTime.component';
import { FeAutoCompleteComponent } from '../../components/feAutoComplete/feAutoComplete.component';
import { FeNumberComponent } from '../../components/feNumber/feNumber.component';
import { FeCheckBoxComponent } from '../../components/feCheckBox/feCheckBox.component';
import { FeRadioComponent } from '../../components/feRadio/feRadio.component';
import { FeFieldSetComponent } from '../../components/feFieldSet/feFieldSet.component';
import { FeEmailComponent } from '../../components/feEmail/feEmail.component';
import { FeFilComponent } from '../../components/feFile/feFile.component';

import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';

const components: { [type: string]: Type<Field> } = {
  BTN: FeButtonComponent,
  TXT: FeTextComponent,
  SEL: FeSelectComponent,
  TXA: FeTextAreaComponent,
  DAT: FeDateComponent,
  TIM: FeTimeComponent,
  ACS: FeAutoCompleteComponent,
  NUM: FeNumberComponent,
  CHK: FeCheckBoxComponent,
  RAD: FeRadioComponent,
  MSL: FeMultiSelectComponent,
  EML: FeEmailComponent,
  FIL: FeFilComponent
};

@Directive({
  selector: '[feField]'
})
export class FeFieldDirective implements Field, OnChanges, OnInit {
  @Input()
  config: FieldConfig;

  @Input()
  group: FormGroup;

  component: ComponentRef<Field>;

  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef
  ) { }

  ngOnChanges() {
    if (this.component) {
      this.component.instance.config = this.config;
      this.component.instance.group = this.group;
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
  }
}
