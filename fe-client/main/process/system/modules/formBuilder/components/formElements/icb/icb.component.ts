import * as _ from 'lodash';
import { Component, OnInit } from '@angular/core';
import { FeBtnComponent } from '../btn/btn.component';

@Component({
  selector: 'icb-input.button-input',
  templateUrl: './icb.component.html',
  styleUrls: ['./icb.component.css', '../baseField/baseField.component.css']
})
export class FeIcbComponent extends FeBtnComponent  {
  
  public properties = {
   
    ...this.properties,
    type: 'ICB',
    icon: '',
  };

  public applicableProperties = {
	
    ...this.applicableProperties,
    theme: true,
    size: true,
  	btnLeftIcon:  false,
    btnRightIcon: false,
    icon: true,
    label: false
	};

}
