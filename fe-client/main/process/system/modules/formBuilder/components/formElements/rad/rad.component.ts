
import { Component, OnInit } from '@angular/core';
import { FeBaseField } from '../baseField/baseField.component';

@Component({
  selector: 'rad-input',
  templateUrl: './rad.component.html',
  styleUrls: ['./rad.component.css', '../baseField/baseField.component.css']
})
export class FeRadComponent extends FeBaseField  {
  public properties = {
    type: 'CHK',
    inputPropsArray: [
      {
        label: 'test',
        value: ''
      }
    ],
    ...this.properties
  };

  public applicableProperties = {
    multipleInputs: true,
    ...this.applicableProperties
  };

  deleteInput(index) {
    console.log('delete clicked', index);
    this.properties.inputPropsArray.splice(index, 1);
    console.log(this.properties);
  }

  addInput() {
    console.log('add clicked');
    this.properties.inputPropsArray.push({label: '', value: ''});
  }
}
