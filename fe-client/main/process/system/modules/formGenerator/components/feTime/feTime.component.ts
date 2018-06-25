import { Component, ViewContainerRef, OnInit, OnChanges } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { NgbTimepickerConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder } from '@angular/forms'
import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';

@Component({
  selector: 'fe-time',
  styleUrls: ['feTime.component.css'],
  templateUrl: 'feTime.component.html'
})
export class FeTimeComponent implements Field {
  config: FieldConfig;
  group: FormGroup;
  time: NgbTimeStruct = { hour: 13, minute: 30, second: 0 };

  constructor(config: NgbTimepickerConfig, private fb: FormBuilder) {
    config.seconds = true;
    config.spinners = false;
  }

}
