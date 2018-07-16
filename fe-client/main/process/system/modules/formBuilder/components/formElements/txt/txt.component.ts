import { Component } from '@angular/core';
import { FeBaseField } from '../baseField/baseField.component';

@Component({
  selector: 'txt-input.fieldComponent',
  templateUrl: './txt.component.html',
  styleUrls: ['./txt.component.css', '../baseField/baseField.component.css']
})
export class FeTxtComponent extends FeBaseField  {
  
  public properties = {
    type: 'TXT',
    ...this.properties
  };

  public applicableProperties: any = {
    prefix: true,
    suffix: true,
    minimumLength:true,
    maximumLength:true,
    ...this.applicableProperties
  };
}
