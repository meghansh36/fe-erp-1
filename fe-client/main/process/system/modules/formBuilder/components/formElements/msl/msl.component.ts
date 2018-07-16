
import { Component } from '@angular/core';
import { FeBaseField } from '../baseField/baseField.component';

@Component({
  selector: 'msl-input',
  templateUrl: './msl.component.html',
  styleUrls: ['./msl.component.css', '../baseField/baseField.component.css']
})
export class FeMslComponent extends FeBaseField  {
  
  public properties = {
    type: 'MSL',
    ...this.properties
  };

}
