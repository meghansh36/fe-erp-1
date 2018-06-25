import { Component, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {NgbDatepickerConfig, NgbDateStruct ,NgbDateParserFormatter, NgbDateAdapter} from '@ng-bootstrap/ng-bootstrap';
//import { NgbDateFRParserFormatter } from "./ngb-date-fr-parser-formatter"

import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';

@Component({
  selector: 'fe-date',
  styleUrls: ['feDate.component.css'],
  templateUrl : 'feDate.component.html',
  providers: []
})
export class FeDateComponent implements Field  {
  config: FieldConfig;
  group: FormGroup;
  constructor(config: NgbDatepickerConfig){}
  
}
