import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';

@Component({
  selector: 'feFile',
  styleUrls: ['feFile.component.css'],
  templateUrl: 'feFile.component.html'
})
export class FeFilComponent implements Field {
  config: FieldConfig;
  group: FormGroup;
}
