
import { Component } from '@angular/core';
import { FeBaseField } from '../baseField/baseField.component';

@Component({
  selector: 'anc-input',
  templateUrl: './anc.component.html',
  styleUrls: ['./anc.component.css', '../baseField/baseField.component.css']
})
export class FeAncComponent extends FeBaseField  {
  public properties = {
    type: 'ANC',
    ...this.properties
  };
}
