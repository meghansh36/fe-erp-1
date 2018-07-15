import { Component, OnInit } from '@angular/core';
import { FeBaseField } from '../baseField/baseField.component';

@Component({
  selector: 'sel-input',
  templateUrl: './sel.component.html',
  styleUrls: ['./sel.component.css', '../baseField/baseField.component.css']
})
export class FeSelComponent extends FeBaseField {
  
  public properties = {
    type: 'SEL',
    ...this.properties
  };
}
