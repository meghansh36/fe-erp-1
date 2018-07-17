
import { Component, OnInit } from '@angular/core';
import { FeBaseField } from '../baseField/baseField.component';

@Component({
  selector: 'rad-input',
  templateUrl: './rad.component.html',
  styleUrls: ['./rad.component.css', '../baseField/baseField.component.css']
})
export class FeRadComponent extends FeBaseField  {
  
  public properties = {
    type: 'RAD',
    ...this.properties
  };

}
