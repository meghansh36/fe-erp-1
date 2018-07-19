import { Component, Input, OnInit } from '@angular/core';
import { BaseComponent } from '@L3Process/system/modules/formGenerator/components/Base.component';

@Component({
  selector: 'feButton',
  styleUrls: ['feButton.component.css'],
  templateUrl: 'feButton.component.html'
})
export class FeButtonComponent extends BaseComponent {

  defaultTheme: string = 'secondary';

  beforeSetDefaultClasses(classesObj) {
    console.log('beforeSetDefaultClasses for field ', this.type, this.icon);
    const buttonThemeClasses = this.defaults.BUTTON_THEMES;
    let themeClass = buttonThemeClasses[this.theme];
    if (!themeClass) {
      themeClass = buttonThemeClasses[this.defaultTheme];
    }
    classesObj['fieldClasses'][themeClass] = true;
    const buttonSizeClasses = this.defaults.BUTTON_SIZES; 
    if (this.size) {
      classesObj['fieldClasses'][buttonSizeClasses[this.size]] = true;
    }
    return classesObj;
  }

}
