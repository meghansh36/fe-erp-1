import { Component, OnInit } from '@angular/core';
import { FeBaseField } from '../baseField/baseField.component';
@Component({
  selector: 'shopclues-eml',
  templateUrl: './eml.component.html',
  styleUrls: ['./eml.component.css', '../baseField/baseField.component.css']
})
export class FeEmlComponent extends FeBaseField {
  public properties = {
    type: 'EML',
    ...this.properties
  };
}
