import { Injectable } from '@angular/core';
import { TxtComponent } from '@L3Process/system/modules/formBuilder/components/formElements/txt/txt.component';
import { NumComponent } from '@L3Process/system/modules/formBuilder/components/formElements/num/num.component';
import { PwdComponent } from '@L3Process/system/modules/formBuilder/components/formElements/pwd/pwd.component';
import { TxaComponent } from '@L3Process/system/modules/formBuilder/components/formElements/txa/txa.component';
import { EmlComponent } from '@L3Process/system/modules/formBuilder/components/formElements/eml/eml.component';
import { PhnComponent } from '@L3Process/system/modules/formBuilder/components/formElements/phn/phn.component';
import { AdrComponent } from '@L3Process/system/modules/formBuilder/components/formElements/adr/adr.component';
import { CurComponent } from '@L3Process/system/modules/formBuilder/components/formElements/cur/cur.component';
import { DtiComponent } from '@L3Process/system/modules/formBuilder/components/formElements/dti/dti.component';
import { TimComponent } from '@L3Process/system/modules/formBuilder/components/formElements/tim/tim.component';
import { HidComponent } from '@L3Process/system/modules/formBuilder/components/formElements/hid/hid.component';
import { DatComponent } from '@L3Process/system/modules/formBuilder/components/formElements/dat/dat.component';
import { MonComponent } from '@L3Process/system/modules/formBuilder/components/formElements/mon/mon.component';
import { componentFactoryName } from '@angular/compiler';

@Injectable()
export class FeFormBuilderService {

  referenceArray: Object[];

  basicElements = [
    {
      name: 'input',
       component: TxtComponent,
      label: 'Text Field',
      icon: 'title',
      type: 'text',
      componentName: 'TxtComponent'
    },
    {
      name: 'number',
       component: NumComponent,
      label: 'Number',
      icon: 'plus_one',
      type: 'number',
      componentName: 'NumComponent'
    },
    {
      name: 'password',
       component: PwdComponent,
      label: 'Password',
      icon: 'priority_high',
      type: 'password',
      componentName: 'PwdComponent'
    },
    {
      name: 'textarea',
       component: TxaComponent,
      label: 'Text Area',
      icon: 'text_format',
      componentName: 'TxaComponent'
    },
    {
      name: 'hidden',
       component: HidComponent,
      label: 'Hidden',
      icon: 'check_box_outline_blank',
      type: 'hidden',
      componentName: 'HidComponent'
    },
    {
      name: 'date',
       component: DatComponent,
      label: 'Date',
      icon: 'date_range',
      type: 'date',
      componentName: 'DatComponent'
    },
    {
      name: 'month',
       component: MonComponent,
      label: 'Month',
      icon: 'date_range',
      type: 'month',
      componentName: 'MonComponent'
    }
  ];

  advancedElements = [
    {
      name: 'email',
       component: EmlComponent,
      label: 'Email',
      icon: 'email',
      type: 'email',
      componentName: 'EmlComponent'
    },
    {
      name: 'phone',
       component: PhnComponent,
      label: 'Phone',
      icon: 'call',
      type: 'number',
      componentName: 'PhnComponent'
    },
    {
      name: 'address',
       component: AdrComponent,
      label: 'Address',
      icon: 'location_on',
      type: 'text',
      componentName: 'AdrComponent'
    },
    {
      name: 'currency',
       component: CurComponent,
      label: 'Currency',
      icon: 'attach_money',
      type: 'text',
      componentName: 'CurComponent'
    },
    {
      name: 'datettime',
       component: DtiComponent,
      label: 'Date/Time',
      icon: 'add_alarm',
      type: 'datetime',
      componentName: 'DtiComponent'
    },
    {
      name: 'time',
       component: TimComponent,
      label: 'Time',
      icon: 'access_time',
      type: 'time',
      componentName: 'TimComponent'
    }
  ];

  component = {
    'TxtComponent': {
      component: TxtComponent,
      name: 'input',
      type: 'text'
    },
    'NumComponent': {
      name: 'input',
      component: NumComponent,
      type: 'number',
    },
    'PwdComponent': {
      name: 'input',
      component: PwdComponent,
      type: 'password',
    },
    'TxaComponent': {
      name: 'textarea',
       component: TxaComponent,
      type: 'textarea'
    },
    'HidComponent': {
      name: 'input',
      component: HidComponent,
      type: 'hidden',
    },
    'DatComponent': {
      name: 'input',
       component: DatComponent,
      type: 'date',
    },
    'MonComponent': {
      name: 'input',
      component: MonComponent,
      type: 'month',
    },
    'EmlComponent': {
      name: 'input',
       component: EmlComponent,
      type: 'email',
    },
    'PhnComponent': {
      name: 'input',
      component: PhnComponent,
      type: 'text',
    },
    'AdrComponent': {
      name: 'input',
       component: AdrComponent,
      type: 'text',
    },
    'CurComponent': {
      name: 'input',
       component: CurComponent,
      type: 'text',
    },
    'DtiComponent': {
      name: 'datettime',
       component: DtiComponent,
      type: 'datetime',
    },
    'TimComponent': {
      name: 'time',
       component: TimComponent,
      type: 'time'
    }

  };

  constructor() { }

  getElementList(elementListToLoad) {
    if (elementListToLoad === 'basic') {
      return this.basicElements;
    }
    if (elementListToLoad === 'advanced') {
      return this.advancedElements;
    }
  }

  getComponent(name) {
    return this.component[name];
  }

}
