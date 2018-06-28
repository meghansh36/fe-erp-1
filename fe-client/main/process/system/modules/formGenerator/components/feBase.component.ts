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
    public style: any;
    public defaultClasses: any;

    constructor(public validator: FeValidatorsService) { }

    ngOnInit() {
        console.log("FeBaseComponent ngOnInit");
        this.applyDefaultValidations();
        this.initFieldStyle();
    }

    applyDefaultValidations() {
        if (this.config.validators) {
            let errors = [];
            errors = this.validator.getValidator(this.config.validators);
            this.group.controls[this.config.flexiLabel].setValidators(errors);
            this.errors = this.validator.toLowerCase(this.config.validators);
        }
    }

    initFieldStyle() {
        this.defaultClasses = this.getFieldClasses();
        this.style = this.getFieldStyles();
    }
    
    getFieldClasses() {
        let config = this.config;
        let type = config.type;
        let labelPosition = 'top';
        
        let customCssClass = config.customCssClass || '';
        
        
        let fieldContainerClasses = `field-container form-field-container ${type}-container`;
        let fieldMainWrapperClasses = `fe-field fe-text ${type} form-group`;
        let fieldLabelContainerClasses = `display-flex field-container field-label-container ${type}-label-container`;
        
        
        if ( !config.hideLabel && config.labelPosition ) {
            labelPosition = config.labelPosition;
        }

        if ( config.hideLabel ) {
            fieldLabelContainerClasses += ' hidden';
        }

        if ( config.prefix  || config.suffix ) {
            fieldContainerClasses += ' input-group ';
        }

        if ( config.hidden ) {
            fieldMainWrapperClasses += ' hidden';
        }

        let classes:any = { 
            fieldMainWrapperClasses,
            fieldWrapperClasses: `field-wrapper ${type}-field-wrapper field-label-${labelPosition}`,
            fieldLabelContainerClasses,
            fieldContainerClasses,
            fieldDescWrapperClasses: `field-desc-container ${type}-desc-cont`,
            fieldDescContainerClasses: `form-text text-muted field-desc ${type}-desc`,
            labelClasses:`field-label ${type}-label`,
            fieldClasses: `form-control form-field ${type}-field ${customCssClass}`
        };
        return classes;
    }

    getFieldStyles() {
        let fieldLabelContainerStyle:any = {};
        let fieldMainWrapperStyle = {};
        let config = this.config;
        let labelWidth = config.labelWidth;
        let labelMargin = config.labelMargin;
        
        if( labelWidth ) {
            fieldLabelContainerStyle.width = `${labelWidth}px`;
        }

        if ( config.width ) {
            fieldMainWrapperStyle['width'] = config.width;
        }

        if ( labelMargin ) {
            let margin:string = `${labelMargin}px`;
            let marginSide:string = 'margin-top'; 
            
            switch( config.labelPosition ) {
            case 'bottom': {
                marginSide = 'margin-top';
                break;
            }
            case 'left': {
                marginSide = 'margin-right';
                break;
            }
            case 'right': {
                marginSide = 'margin-left';
                break;
            }
            default: {
                marginSide = 'margin-top';
                break;
            }
            }  
            fieldLabelContainerStyle[ marginSide ] = margin;
        }

        if ( config.marginLeft ) {
            fieldMainWrapperStyle[ 'margin-left' ] = config.marginLeft;
        }

        if ( config.marginRight ) {
            fieldMainWrapperStyle[ 'margin-right' ] = config.marginRight;
        }

        if ( config.marginTop ) {
            fieldMainWrapperStyle[ 'margin-top' ] = config.marginTop;
        }

        if ( config.marginBottom ) {
            fieldMainWrapperStyle[ 'margin-bottom' ] = config.marginBottom;
        }

        let inlineStyle = {
            fieldMainWrapperStyle,
            fieldWrapperStyle: {},
            fieldDescWrapperStyle: {},
            fieldDescContainerStyle: {},
            fieldLabelContainerStyle,
            fieldContainerdStyle: {},
            labelStyle: {},
            fieldStyle: {}

        };
        return inlineStyle;
    }
    

}
