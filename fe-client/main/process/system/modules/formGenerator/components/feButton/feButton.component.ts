import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';

@Component({
  selector: 'feButton',
  styleUrls: ['feButton.component.css'],
  templateUrl: 'feButton.component.html'
})
export class FeButtonComponent implements Field {
  config: FieldConfig;
  group: FormGroup;
}
