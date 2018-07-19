import { Component } from '@angular/core';
import { FeBaseField } from '../baseField/baseField.component';

@Component({
  selector: 'txt-input.fieldComponent',
  templateUrl: './txt.component.html',
  styleUrls: ['./txt.component.css', '../baseField/baseField.component.css']
})
export class FeTxtComponent extends FeBaseField  {
  public length;
  public properties = {
    type: 'TXT',
    ...this.properties
  };

  public applicableProperties: any = {
    prefix: true,
    suffix: true,
    minimumLength:true,
    maximumLength:true,
    mask: true,
    ...this.applicableProperties
  };

  get maskConfig() {
    if (this.mask) {
      const mask = this.mask;
      return { mask };
    }
    return { mask: null };
    // if ( this.mask ) {
    //   return this.mask;
    // }
    // return null;
  }

  get len() {
    return this.length;
  }
  set len(len) {
    this.length = len;
  }

}
