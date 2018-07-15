import { Component, OnInit } from '@angular/core';
import { FeBaseField } from '../baseField/baseField.component';

@Component({
  selector: 'btn-input',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.css', '../baseField/baseField.component.css']
})
export class FeBtnComponent extends FeBaseField implements OnInit{
  showEdit = true;
  properties = {
		btnTheme: 'default',
		btnSize: 'small',
		btnLeftIcon:  '',
		btnRightIcon: '',
		type: 'BTN',
		...this.properties
	};

  applicableProperties={
		btnTheme: true,
    btnSize: true,
  	btnLeftIcon:  true,
  	btnRightIcon: true,
  	btnAction: true,
		btnActArgs: true,
		label:true,
  	hideLabel:true,
  	labelPosition:true,
		tooltip:true,
		customCssClass:true,
  	tabIndex:true,
  	marginTop:true,
  	marginRight:true,
  	marginLeft:true,
		marginBottom:true,
		hidden: true,
		disabled: true,
		flexiLabel: true,
		validations: true,
  	// customValFuncFlag:true,
  	customFuncValidationVal: true,
  	// jsonLogicValFlag:true,
  	jsonLogicVal: true,
  	// formClassValFlag:true,
		formClassValidationVal: true,
		events: true,
		condition: true,
		type: true,
		fldDisabledCondition: true,
		active: true
	}
}
