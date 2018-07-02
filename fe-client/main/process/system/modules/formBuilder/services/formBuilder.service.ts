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

@Injectable()
export class FeFormBuilderService {

  referenceArray: Object[];

  basicElements = [
    {
      name: 'input',
       component: TxtComponent,
      label: 'Text Field',
      icon: 'title',
      type: 'text'
    },
    {
      name: 'number',
       component: NumComponent,
      label: 'Number',
      icon: 'plus_one',
      type: 'number'
    },
    {
      name: 'password',
       component: PwdComponent,
      label: 'Password',
      icon: 'priority_high',
      type: 'password'
    },
    {
      name: 'textarea',
       component: TxaComponent,
      label: 'Text Area',
      icon: 'text_format',
    },
    {
      name: 'hidden',
       component: HidComponent,
      label: 'Hidden',
      icon: 'check_box_outline_blank',
      type: 'hidden'
    },
    {
      name: 'date',
       component: DatComponent,
      label: 'Date',
      icon: 'date_range',
      type: 'date'
    },
    {
      name: 'month',
       component: MonComponent,
      label: 'Month',
      icon: 'date_range',
      type: 'month'
    }
  ];

  advancedElements = [
    {
      name: 'email',
       component: EmlComponent,
      label: 'Email',
      icon: 'email',
      type: 'email'
    },
    {
      name: 'phone',
       component: PhnComponent,
      label: 'Phone',
      icon: 'call',
      type: 'number'
    },
    {
      name: 'address',
       component: AdrComponent,
      label: 'Address',
      icon: 'location_on',
      type: 'text'
    },
    {
      name: 'currency',
       component: CurComponent,
      label: 'Currency',
      icon: 'attach_money',
      type: 'text'
    },
    {
      name: 'datettime',
       component: DtiComponent,
      label: 'Date/Time',
      icon: 'add_alarm',
      type: 'datetime'
    },
    {
      name: 'time',
       component: TimComponent,
      label: 'Time',
      icon: 'access_time',
      type: 'time'
    }
  ];
  constructor() { }

  getElementList(elementListToLoad) {
    if (elementListToLoad === 'basic') {
      return this.basicElements;
    }
    if (elementListToLoad === 'advanced') {
      return this.advancedElements;
    }
  }

}