import { Component, OnInit } from '@angular/core';
import { FeBaseField } from '../baseField/baseField.component';

@Component({
  selector: 'btn-input',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.css', '../baseField/baseField.component.css']
})
export class FeBtnComponent extends FeBaseField implements OnInit{

	public properties = {
		btnTheme: 'default',
		btnSize: 'small',
		btnLeftIcon:  '',
		btnRightIcon: '',
		type: 'BTN',
		...this.properties
	};

  public applicableProperties = {
		btnTheme: true,
    btnSize: true,
  	btnLeftIcon:  true,
		btnRightIcon: true,
		...this.applicableProperties,
		labelPosition: false,
		labelWidth: false,
		labelMargin: false,
		hideLabel: false,
		width: false
	};
}
