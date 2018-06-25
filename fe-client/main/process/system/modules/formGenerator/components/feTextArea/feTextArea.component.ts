import { Component, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';

@Component({
  selector: 'fe-textarea',
  styleUrls: ['feTextArea.component.css'],
  templateUrl : 'feTextArea.component.html'
})
export class FeTextAreaComponent implements Field {
  config: FieldConfig;
  group: FormGroup;
}
