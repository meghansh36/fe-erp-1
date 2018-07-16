import { Component } from '@angular/core';
import { FeBaseField } from '../baseField/baseField.component';
@Component({
  selector: 'hid-input',
  templateUrl: './hid.component.html',
  styleUrls: ['./hid.component.css','../baseField/baseField.component.css']
})
export class FeHidComponent extends FeBaseField  {
  
  public properties = {
    type: 'HID',
    ...this.properties
  };

  public applicableProperties: any = {
  	label:true,
  	flexiLabel: true,
    events: true,
    active: true
  };

}
