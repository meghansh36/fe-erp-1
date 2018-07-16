import { Component } from '@angular/core';
import { FeBaseField } from '../baseField/baseField.component';

@Component({
  selector: 'chk-input',
  templateUrl: './chk.component.html',
  styleUrls: ['./chk.component.css', '../baseField/baseField.component.css']
})
export class FeChkComponent extends FeBaseField  {
  
	public properties = {
    type: 'CHK',
    ...this.properties
  };

  public applicableProperties = {//Add more properties for multiple checkbox
    ...this.applicableProperties
  };

}
