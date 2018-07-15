import { Component, OnInit } from '@angular/core';
import { FeBaseField } from '../baseField/baseField.component';
import * as _ from 'lodash';
@Component({
  selector: 'cur-input',
  templateUrl: './cur.component.html',
  styleUrls: ['./cur.component.css', '../baseField/baseField.component.css']
})
export class FeCurComponent extends FeBaseField {
	public properties = {
    type: 'CUR',
    ...this.properties
  };
}
