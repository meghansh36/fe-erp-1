import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';

@Component({
  selector: 'feSelect',
  styleUrls: ['feSelect.component.css'],
  templateUrl: 'feSelect.component.html'
})
export class FeSelectComponent implements Field {
  config: FieldConfig;
  group: FormGroup;
}
