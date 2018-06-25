import { Component, ViewContainerRef, OnInit } from '@angular/core';
import { FormGroup, ValidationErrors, Validators } from '@angular/forms';


import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';

@Component({
  selector: 'fe-email',
  styleUrls: ['feEmail.component.css'],
  templateUrl: 'feEmail.component.html'
})
export class FeEmailComponent implements Field, OnInit {
  config: FieldConfig;
  group: FormGroup;
  error: string;

  ngOnInit() {
    this.group.controls[this.config.flexiLabel].setValidators([Validators.required, Validators.email]);
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
