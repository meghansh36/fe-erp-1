import { Component, OnInit } from '@angular/core';
import { FeBaseField } from '../baseField/baseField.component';
@Component({
  selector: 'dat-input',
  templateUrl: './dat.component.html',
  styleUrls: ['./dat.component.css', '../baseField/baseField.component.css']
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
