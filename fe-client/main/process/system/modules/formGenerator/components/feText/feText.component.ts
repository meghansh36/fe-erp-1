import { Component, ViewContainerRef, OnInit } from '@angular/core';
import { FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { MatFormField, MatInput, MatLabel, MatPlaceholder } from '@angular/material';

import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';

@Component({
  selector: 'fe-text',
  styleUrls: ['feText.component.css'],
  templateUrl: 'feText.component.html'
})
export class FeTextComponent implements Field, OnInit {
  config: FieldConfig;
  group: FormGroup;
  error: string;
  ngOnInit() {
    this.group.controls[this.config.flexiLabel].setValidators([Validators.required, Validators.minLength(8)]);
    this.group.controls[this.config.flexiLabel].valueChanges.subscribe((data) => {
      console.log(this.group.controls[this.config.flexiLabel].valid);
      const controlErrors: ValidationErrors = this.group.get(this.config.flexiLabel).errors;
      if (controlErrors != null) {
        Object.keys(controlErrors).forEach(keyError => {
          this.error = 'Key control: ' + this.config.flexiLabel + ', keyError: ' + keyError + ', err value: ', controlErrors[keyError];
        });
      }
      else {
        this.error = '';
      }
    })
  }

}
