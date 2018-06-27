import { Component, ViewContainerRef, OnInit, Injectable, Renderer2 } from '@angular/core';
import { FormGroup, ValidationErrors, Validators, AbstractControl } from '@angular/forms';
import { CustomValidators } from 'ng4-validators';
import { NgbDatepickerConfig, NgbDateStruct, NgbDateParserFormatter, NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';

import { Field } from '../models/field.interface';
import { FieldConfig } from '../models/field-config.interface';
import { FeValidatorsService } from '../services/validators.service';

@Injectable()
export class FeBaseComponent implements Field, OnInit {
    config: FieldConfig;
    group: FormGroup;
    error: string;
    customVal = [];
    name: string;
    show: boolean = false;
    public errors = [];

    constructor(public validator: FeValidatorsService, private render: Renderer2, config: NgbDatepickerConfig) { }

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
        if (this.config.customValidator) {
            let fn = this.config.customValidator[Object.keys(this.config.customValidator)[0]];
            let funArray = [];
            funArray.push(fn);
            this.group.controls[this.config.flexiLabel].setValidators(funArray);
            let msg = this.config.customValidator['message'];
            let obj = {
                'name': Object.keys(this.config.customValidator)[0],
                'message': msg
            }
            this.customVal.push(obj);
            console.log(this.customVal);
        }
    }

}
