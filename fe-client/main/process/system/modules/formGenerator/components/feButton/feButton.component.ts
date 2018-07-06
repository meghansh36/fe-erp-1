import { Component } from '@angular/core';
import { FeBaseComponent } from '@L1Process/system/modules/formGenerator/components/feBase.component';

const buttonThemeClasses = {
  primary: 'btn btn-primary',
  secondary: 'btn btn-secondory'
};

@Component({
  selector: 'feButton',
  styleUrls: ['feButton.component.css'],
  templateUrl: 'feButton.component.html'
})
export class FeButtonComponent extends FeBaseComponent {

  defaultTheme: string = 'primary';

  
  beforeSetDefaultClasses( classesObj ) {
    let themeClass = buttonThemeClasses[ this.theme ];
    console.log("beforeSetDefaultClasses");
    if ( !themeClass ) {
      themeClass = buttonThemeClasses[ this.defaultTheme ];
    }
    classesObj[ 'fieldClasses' ][ themeClass ] = true;
    return classesObj;
  }

}
