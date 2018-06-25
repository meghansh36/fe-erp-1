import { Component, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';

@Component({
  selector: 'fe-fieldset',
  styleUrls: ['feFieldSet.component.css'],
  templateUrl : 'feFieldSet.component.html'
})
export class FeFieldSetComponent implements Field {
  config: FieldConfig;
  group: FormGroup;
}
