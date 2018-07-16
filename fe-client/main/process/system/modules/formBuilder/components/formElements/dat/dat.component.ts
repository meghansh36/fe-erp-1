import { Component, OnInit } from '@angular/core';
import { FeBaseField } from '../baseField/baseField.component';
import { FeDateFormatterService } from '@L1Process/system/services/feDateFormatter.service';
import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'dat-input',
  templateUrl: './dat.component.html',
  styleUrls: ['./dat.component.css', '../baseField/baseField.component.css'],
  providers: [ {
    provide: NgbDateParserFormatter,
    useClass: FeDateFormatterService
  } ]
})
export class FeDatComponent extends FeBaseField {

  showEdit = true;
  properties = {
    minimumDate: '',
    maximumDate: '',
    dateTimeFormat: '',
    dateFormat: '',
    type: 'DAT',
  ...this.properties
};

  applicableProperties = {
    minimumDate: true,
    maximumDate: true,
    dateTimeFormat: true,
    dateFormat: true,
    ...this.applicableProperties
  }

}
