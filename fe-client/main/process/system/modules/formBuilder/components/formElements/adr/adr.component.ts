import { Component } from '@angular/core';
import { FeBaseField } from '../baseField/baseField.component';
@Component({
  selector: 'adr-input',
  templateUrl: './adr.component.html',
  styleUrls: ['../baseField/baseField.component.css', './adr.component.css']
})
export class FeAdrComponent extends FeBaseField {

  showEdit = true;
  properties = {
    allowMultipleAddress: false,
  ...this.properties    
  };

  applicableProperties = {
    allowMultipleAddress: true,
    ...this.applicableProperties
  };
}
