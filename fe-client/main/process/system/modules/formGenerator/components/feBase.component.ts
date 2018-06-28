import { Component, ViewContainerRef, OnInit, Injectable, Renderer2 } from '@angular/core';
import { FormGroup, ValidationErrors, Validators, AbstractControl } from '@angular/forms';
import { FRM0000001Component } from '../../../../../forms/FRM0000001.component';
import { CustomValidators } from 'ng4-validators';
import { NgbDatepickerConfig, NgbDateStruct, NgbDateParserFormatter, NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';

import { Field } from '../models/field.interface';
import { FieldConfig } from '../models/field-config.interface';
import { FeValidatorsService } from '../services/validators.service';

@Injectable()
export class FeBaseComponent extends FRM0000001Component implements Field, OnInit {
    public config: FieldConfig;
    public group: FormGroup;
    public error: string;
    public validators = [];
    public customVal = [];
    public formClassVal = [];
    public name: string;
    public show: boolean = false;
    public errors = [];

    ngOnInit() {
        this.applyDefaultValidations();
    }

    applyDefaultValidations() {
        if (this.config.validators) {
            let errors = [];
            this.validators = this.validators.concat(this.validator.getValidator(this.config.validators));
            this.errors = this.validator.toLowerCase(this.config.validators);
        }
        try {
            if (this.config.customValidator) {
                let fn = this.config.customValidator[Object.keys(this.config.customValidator)[0]];
                this.validators.push(fn);
                let msg = this.config.customValidator['message'];
                let obj = {
                    'name': Object.keys(this.config.customValidator)[0],
                    'message': msg
                }
                this.customVal.push(obj);
            }
        }
        catch (err) {
            console.log(err);
        }
        try {
            if (this.config.formClassValidator) {
                let fname: string;
                this.config.formClassValidator.forEach((fun) => {
                    fname = fun.funcName;
                    switch (fname) {
                        case "checkPattern": this.validators.push(this.checkPattern());
                            let obj = {
                                'name': 'checkpattern',
                                'message': fun.message
                            }
                            this.formClassVal.push(obj);
                            break;
                    }
                })
            }
        }
        catch (err) {
            console.log(err);
        }
        this.group.controls[this.config.flexiLabel].setValidators(this.validators);
    }

}
