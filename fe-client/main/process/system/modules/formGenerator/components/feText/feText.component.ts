import { Component, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';

@Component({
  selector: 'fe-text',
  styleUrls: ['feText.component.css'],
  templateUrl : 'feText.component.html'
})
export class FeTextComponent implements Field {
  config: FieldConfig;
  group: FormGroup;
}
