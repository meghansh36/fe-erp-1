import { Injectable } from '@angular/core';
import { FeTxtComponent } from '../components/form-elements/txt/txt.component';
import { FeNumComponent } from '../components/form-elements/num/num.component';
import { FePwdComponent } from '../components/form-elements/pwd/pwd.component';
import { FeTxaComponent } from '../components/form-elements/txa/txa.component';
import { FeEmlComponent } from '../components/form-elements/eml/eml.component';
import { FePhnComponent } from '../components/form-elements/phn/phn.component';
import { FeAdrComponent } from '../components/form-elements/adr/adr.component';
import { FeCurComponent } from '../components/form-elements/cur/cur.component';
import { FeDtiComponent } from '../components/form-elements/dti/dti.component';
import { FeTimComponent } from '../components/form-elements/tim/tim.component';
import { FeHidComponent } from '../components/form-elements/hid/hid.component';
import { FeDatComponent } from '../components/form-elements/dat/dat.component';
import { FeMonComponent } from '../components/form-elements/mon/mon.component';

@Injectable()
export class FeFormBuilderService {

  basicElements = [
    {
      name: 'input',
      // component: FeTxtComponent,
      label: 'Text Field',
      icon: 'title'
    },
    {
      name: 'number',
      // component: FeNumComponent,
      label: 'Number',
      icon: 'plus_one'
    },
    {
      name: 'password',
      // component: FePwdComponent,
      label: 'Password',
      icon: 'priority_high'
    },
    {
      name: 'textarea',
      // component: FeTxaComponent,
      label: 'Text Area',
      icon: 'text_format'
    },
    {
      name: 'hidden',
      // component: FeHidComponent,
      label: 'Hidden',
      icon: 'check_box_outline_blank'
    },
    {
      name: 'date',
      // component: FeDatComponent,
      label: 'Date',
      icon: 'date_range'
    },
    {
      name: 'month',
      // component: FeMonComponent,
      label: 'Month',
      icon: 'date_range'
    }
  ];

  advancedElements = [
    {
      name: 'email',
      // component: FeEmlComponent,
      label: 'Email',
      icon: 'email'
    },
    {
      name: 'phone',
      // component: FePhnComponent,
      label: 'Phone',
      icon: 'call'
    },
    {
      name: 'address',
      // component: FeAdrComponent,
      label: 'Address',
      icon: 'location_on'
    },
    {
      name: 'currency',
      // component: FeCurComponent,
      label: 'Currency',
      icon: 'attach_money'
    },
    {
      name: 'datettime',
      // component: FeDtiComponent,
      label: 'Date/Time',
      icon: 'add_alarm'
    },
    {
      name: 'time',
      // component: FeTimComponent,
      label: 'Time',
      icon: 'access_time'
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
