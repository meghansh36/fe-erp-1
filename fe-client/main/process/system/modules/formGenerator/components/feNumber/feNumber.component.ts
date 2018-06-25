import { Component, ViewContainerRef } from '@angular/core';
import { FormGroup, ValidationErrors, Validators } from '@angular/forms';

import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';

@Component({
  selector: 'fe-number',
  styleUrls: ['feNumber.component.css'],
  templateUrl: 'feNumber.component.html'
})
export class FeNumberComponent implements Field {
  config: FieldConfig;
  group: FormGroup;
  error: string;

  ngOnInit() {
    this.group.controls[this.config.flexiLabel].setValidators([Validators.required]);
    this.group.controls[this.config.flexiLabel].valueChanges.subscribe((data) => {
      console.log(this.group.controls[this.config.flexiLabel].valid);
      const controlErrors: ValidationErrors = this.group.get(this.config.flexiLabel).errors;
      if (controlErrors != null) {
        Object.keys(controlErrors).forEach(keyError => {
          this.error = this.config.flexiLabel + ',has keyError: ' + keyError + ', err value: ', controlErrors[keyError];
        });
      }
      else {
        this.error = '';
      }
    })
  }
}
