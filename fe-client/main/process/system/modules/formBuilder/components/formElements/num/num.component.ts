import { Component, OnInit } from '@angular/core';
import { FeBaseField } from '../baseField/baseField.component';
@Component({
  selector: 'num-input.fieldComponent',
  templateUrl: './num.component.html',
  styleUrls: ['./num.component.css', '../baseField/baseField.component.css']
})
export class FeNumComponent extends FeBaseField implements OnInit {

  properties = {
    type: 'NUM',
    minimumValue: undefined,
    maximumValue: undefined,
    useDelimeter: true,
    requiredDecimal: true,
    ...this.properties
  };

  applicableProperties = {
    minimumValue: true,
    maximumValue: true,
    useDelimeter: true,
    requiredDecimal: true,
    ...this.applicableProperties
  }

}
