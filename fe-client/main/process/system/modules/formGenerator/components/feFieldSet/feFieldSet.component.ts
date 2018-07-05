import { Component } from '@angular/core';
// import { FeFormSchemaService } from '@L1Main/services/formSchema.service';
// import { FeValidatorsService } from '@L1Process/system/modules/formGenerator/services/validators.service';
// import { FeDependentService } from '@L1Process/system/modules/formGenerator/services/dependent.service';
//import { Field } from '@L1Process/system/modules/formGenerator/models/field.interface';
import { FieldConfig } from '@L1Process/system/modules/formGenerator/models/field-config.interface';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'fe-fieldset',
  styleUrls: ['feFieldSet.component.css'],
  templateUrl : 'feFieldSet.component.html'
})
export class FeFieldSetComponent  {
 //Inputs passes from parent form component
  public config: FieldConfig;
  public group: FormGroup;
  public form: any;
  public formComponent: any;

  get hideLegend() {
    return this.config.hideLabel;
  }

  get id() {
    return this.config.id;
  }

  get label() {
    return this.config.label;
  }

  get flexiLabel() {
    return this.config.flexiLabel;
  }

  get components() {
    return this.config.components;
  }
}
