import { Component, ViewContainerRef, OnInit, Injectable } from '@angular/core';
import { FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { CustomValidators } from 'ng4-validators';

import { Field } from '../models/field.interface';
import { FieldConfig } from '../models/field-config.interface';
import { FeValidatorsService } from '../services/validators.service';

@Injectable()
export class FeBaseComponent implements Field, OnInit {
    config: FieldConfig;
    group: FormGroup;
    error: string;
    name: string;
    show: boolean = false;
    public errors = [];

    constructor(public validator: FeValidatorsService) { }

    ngOnInit() {
        this.applyDefaultValidations();
    }

    applyDefaultValidations() {
        if (this.config.validators) {
            let errors = [];
            errors = this.validator.getValidator(this.config.validators);
            this.group.controls[this.config.flexiLabel].setValidators(errors);
            this.errors = this.validator.toLowerCase(this.config.validators);
        }
    }

}
