import * as _ from 'lodash';
import { Component, OnInit } from '@angular/core';
import { FeBtnComponent } from '../btn/btn.component';

@Component({
  selector: 'icb-input',
  templateUrl: './icb.component.html',
  styleUrls: ['./icb.component.css', '../baseField/baseField.component.css']
})
export class FeIcbComponent extends FeBtnComponent  {
  public properties = {
    type: 'ICB',
    ...this.properties
  };
}
