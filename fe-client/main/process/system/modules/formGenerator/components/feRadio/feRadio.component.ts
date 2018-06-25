import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';

@Component({
  selector: 'fe-radio',
  styleUrls: ['feRadio.component.css'],
  templateUrl: 'feRadio.component.html'
})
export class FeRadioComponent implements Field {
  config: FieldConfig;
  group: FormGroup;
}
