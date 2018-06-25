import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray } from '@angular/forms';

import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';

@Component({
  selector: 'fe-check',
  styleUrls: ['feCheckBox.component.css'],
  templateUrl: 'feCheckBox.component.html'
})
export class FeCheckBoxComponent implements Field {
  config: FieldConfig;
  group: FormGroup;
}
