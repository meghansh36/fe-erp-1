import { Component, OnInit } from '@angular/core';
import { FeBaseField } from '../baseField/baseField.component';

@Component({
  selector: 'btn-input',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.css', '../baseField/baseField.component.css']
})
export class FeBtnComponent extends FeBaseField implements OnInit{

	public properties = {
		theme: 'default',
		size: 'small',
		btnLeftIcon:  '',
		btnRightIcon: '',
		type: 'BTN',
		...this.properties
	};

  public applicableProperties = {
		theme: true,
    size: true,
  	btnLeftIcon:  true,
		btnRightIcon: true,
		...this.applicableProperties,
		labelPosition: false,
		labelWidth: false,
		labelMargin: false,
		hideLabel: false,
		width: false,
		defaultValueType: false,
	};

	
  beforeSetDefaultClasses(classesObj) {
    const buttonThemeClasses = this.defaults.BUTTON_THEMES;
    let themeClass = buttonThemeClasses[this.theme];
    if (!themeClass) {
      themeClass = buttonThemeClasses[this.defaults.BUTTON_THEME];
    }
    classesObj['fieldClasses'][themeClass] = true;
		const buttonSizeClasses = this.defaults.BUTTON_SIZES; 
		
    if (this.size) {
      classesObj['fieldClasses'][buttonSizeClasses[this.size]] = true;
    } else {
			classesObj['fieldClasses'][buttonSizeClasses[this.defaults.BUTTON_SIZE]] = true;
		}
    return classesObj;
	}
	
	get icon() {
		return this.properties.icon;
	}

	get theme() {
		return this.properties.theme;
	}

	get btnLeftIcon() {
		return this.properties.btnLeftIcon;
	}

	get btnRightIcon() {
		return this.properties.btnRightIcon;
	}

	get size() {
		return this.properties.size;
	}

}
