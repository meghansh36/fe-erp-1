import { Component, OnInit } from '@angular/core';
import { FeBaseField } from '../baseField/baseField.component';

@Component({
  selector: 'phn-input',
  templateUrl: './phn.component.html',
  styleUrls: ['./phn.component.css', '../baseField/baseField.component.css']
})
export class FePhnComponent extends FeBaseField  {
 
  public properties = {
    type: 'PHN',
    ...this.properties
  };

}
