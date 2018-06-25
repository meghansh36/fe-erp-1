import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';

@Component({
  selector: 'feMultiSelect',
  styleUrls: ['feMultiSelect.component.css'],
  templateUrl: 'feMultiSelect.component.html'
})
export class FeMultiSelectComponent implements Field {
  config: FieldConfig;
  group: FormGroup;
}
