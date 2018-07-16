import { Component } from '@angular/core';
import { TxtComponent } from '@L3Process/system/modules/formBuilder/components/formElements/txt/txt.component';
@Component({
  selector: 'num-input.fieldComponent',
  templateUrl: './num.component.html',
  styleUrls: ['./num.component.css', '../baseField/baseField.component.css']
})
export class FeNumComponent extends TxtComponent {

  properties = {
    type: 'NUM',
    minimumValue: undefined,
    maximumValue: undefined,
    useDelimeter: true,
    requiredDecimal: true,
    ...this.properties
  };

  applicableProperties = {
    minimumValue: true,
    maximumValue: true,
    useDelimeter: true,
    requiredDecimal: true,
    ...this.applicableProperties
  };

}
