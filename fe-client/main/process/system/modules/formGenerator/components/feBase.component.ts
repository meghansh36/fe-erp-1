import { Component,Input, OnInit, Injectable, ViewChild, Renderer2, ElementRef,  OnDestroy } from '@angular/core';
import { FormGroup,  FormControl,ValidatorFn, AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import * as _ from 'lodash';
//import { CustomValidators } from 'ng4-validators';
import { NgbDatepickerConfig, NgbDateStruct, NgbDateParserFormatter, NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';
import { FeFormComponent } from '@L1Process/system/modules/formGenerator/components/feForm/feForm.component';
import { config } from 'rxjs';
import { groupBy } from 'rxjs/operators';
import { log } from 'util';
import { longStackSupport } from 'q';
import { sanitizeStyle } from '@angular/core/src/sanitization/sanitization';
import { FeFormSchemaService } from '../../../../../services/formSchema.service';
import { FeValidatorsService } from '../services/validators.service';
import { FeDependentService } from '../services/dependent.service';
import { Field } from '../models/field.interface';
import { FieldConfig } from '../models/field-config.interface';

@Injectable()
export class FeBaseComponent implements Field, OnInit, OnDestroy {
    
    public config: FieldConfig;
    public group: FormGroup;
    public form: FeFormComponent;
    public resource: any;

    public error: string;
    public validators = [];
    public name: string;
    public show: boolean = false;
    public errors = [];
    public style: any;
    public defaultClasses: any;
    public defaultFieldWidth: any;
    
    public $statusChange: any;

    constructor( public elemRef: ElementRef, public formSchemaService: FeFormSchemaService, public validator: FeValidatorsService, public dependent: FeDependentService, public render: Renderer2) {
        this.defaultFieldWidth = '50%';
        
        
    }
    public statesOfCountry = [];
    public newControl: string;

    ngOnInit(): void {
        console.log("resource", this.resource);
        this.applyDefaultValidations();
        this.initFieldStyle();
        this.applyWatch();
        this.checkForDependentData();
        console.log(`Errors for field ${this.flexiLabel}`, this.errors);
    }

    ngOnDestroy() {
        this.$statusChange.unsubscribe();
    }

    applyWatch(): void {
        this.$statusChange = this.control.statusChanges.subscribe( this.onStatusChange.bind( this ) );
    }

    onStatusChange( status: string ): void {
        if ( status == 'INVALID' ) {
            this.addCssClass( 'fieldClasses', 'is-invalid' );
            this.addCssClass( 'labelClasses', 'text-danger' );
            this.removeCssClass( 'labelClasses', 'valid-field-label' );
        } else if ( status == 'VALID' ) {
            this.removeCssClass( 'fieldClasses', 'is-invalid' );
            this.removeCssClass( 'labelClasses', 'text-danger' );
            this.addCssClass( 'labelClasses', 'valid-field-label' );
        }
    }

    removeCssClass( targetKey: string, classStr: string ): boolean {
        if ( !this.defaultClasses[ targetKey ] ) {
            return false;
        }
        this.defaultClasses[ targetKey ][ classStr ] = false;
        return true;
    }

    addCssClass( targetKey: string, classStr: string ): boolean {
        if ( !this.defaultClasses[ targetKey ] ) {
            return false;
        }  
        if ( this.hasCssClass( targetKey, classStr ) ) {
            return true;
        }
        this.defaultClasses[ targetKey ][ classStr ] = true;
        return true;
    }

    toggleCssClass( targetKey: string, classStr: string ):boolean {
        if ( this.hasCssClass( targetKey, classStr ) ) {
            return this.removeCssClass( targetKey, classStr );
        } else {
            return this.addCssClass( targetKey, classStr );
        }
    }

    hasCssClass( targetKey: string, classStr: string ): boolean {
        return this.defaultClasses[ targetKey ] && this.defaultClasses[ targetKey ][ classStr ];
        
    }

    checkForDependentData() {
        if (this.config.isParent) {
            let dependentData: any = this.dependent.dependentData(this.config.flexiLabel);
            this.group.get(this.config.flexiLabel).valueChanges.subscribe((value) => {
                dependentData[0].states.forEach((name) => {
                    if (name.name == value) {
                        this.newControl = Object.keys(dependentData[0])[1];
                        this.group.addControl(this.newControl, new FormControl(''));
                        this.statesOfCountry = name.states;
                    }
                })
            })
        }
    }

    applyDefaultValidations(): void {
        if ( this.config.validations ) { 
            this.applyNgValidators();
        }
        if ( this.config.customValidations ) {
            this.applyCustomValidations();
        }

        if ( this.config.formClassValidations ) { 
            this.applyFormClassValidations();
        }
        console.log("this.validators", this.validators);
        this.control.setValidators( this.validators );
    }

    applyNgValidators(): void {
        this.validators =  this.validators.concat( this.validator.getValidators(this.config.validations ));
        this.errors = this.validator.transformToValidErr(this.config.validations);
    }

    applyCustomValidations(): void {
        try {
            let validations = this.config.customValidations;
            for( let name in  validations ) {
                let validation = validations[ name ];
                let fn: any = validation.validatorFn;
                let message: string = validation.message;
                if ( typeof fn == 'function' ) {
                    this.validators.push( fn );
                    let errObj = {
                        name,
                        message
                    };
                    this.errors.push( errObj )
                } else {
                    console.log( `Given validator is not a function for validation ${name} for field ${this.flexiLabel}` );
                }
            }
        } catch (err) {
            console.log(err);
        }
    }

    applyFormClassValidations(): void {
        try {
            if ( !this.form ) {
                console.log(`Form class instance not found in field for applying form class validations for field ${this.config.code}`);
                return;
            }
            let validations = this.config.formClassValidations;
            for ( let validationName in  validations ) {
                let validation = validations[ validationName ];
                let validatorFunc  = validation.validatorFuncName;
                let errorMessage = validation.message;
                
                if ( this.form[ validatorFunc ] && typeof this.form[ validatorFunc ] == 'function' ) {
                    this.control.setAsyncValidators( this.form[ validatorFunc ].bind( this.form ) );
                    let errorObj = {
                        name: validationName,
                        message: errorMessage
                    };
                    this.errors.push( errorObj );
                } else {
                    console.log( `Form class validator function ${validatorFunc} does not exist for ${validationName} custom validation for field ${this.config.code}.` );
                }
            }
        } catch (err) {
            console.log(err);
        }
    }

    getMask() {
        if (this.config.mask) {
            return this.config.mask;
        }
        return false;
    }

    initFieldStyle() {
        this.defaultClasses = this.getFieldClasses();
        this.style = this.getFieldStyles();
        this.style = _.assign( {}, this.style, this.config.style );
    }


    getFieldClasses() {
        let config = this.config;
        let type = config.type;
        let labelPosition = 'top';
        let customCssClass = config.customCssClass || '';

        if (!config.hideLabel && config.labelPosition) {
            labelPosition = config.labelPosition;
        }
        
        let fieldContainerClasses = {};
        let classesStr = `form-field-container ${type}-container` ;
        if (config.prefix || config.suffix) {
            classesStr += ' input-group' ;
        }
        fieldContainerClasses = this._makeCssClassesObj( classesStr );

        let fieldMainWrapperClasses = {};
        classesStr = `fe-field ${type}-container form-group`;
        if ( config.hidden ) {
            classesStr += ' hidden';
        }
        fieldMainWrapperClasses = this._makeCssClassesObj( classesStr );

        let fieldLabelContainerClasses = {};
        classesStr = `fe-field-container field-label-container ${type}-label-container`;
        if ( config.hideLabel ) {
            classesStr += ' hidden';
        }
        if ( this.hasTextLenghtLimit ) {
            classesStr += ' has-text-limit';
        }
        fieldLabelContainerClasses = this._makeCssClassesObj( classesStr );

        let fieldWrapperClasses = {};
        classesStr = `field-wrapper ${type}-field-wrapper field-label-${labelPosition}`;
        fieldWrapperClasses = this._makeCssClassesObj( classesStr );

        let fieldDescWrapperClasses = {};
        classesStr = `field-desc-container ${type}-desc-cont`;
        fieldDescWrapperClasses = this._makeCssClassesObj( classesStr );

        let fieldDescContainerClasses = {};
        classesStr = `form-text text-muted field-desc ${type}-desc` ;
        fieldDescContainerClasses = this._makeCssClassesObj( classesStr );

        let labelClasses = {};
        classesStr = `field-label ${type}-label`;
        if ( this.isMandatory ) {
            classesStr += ` mandatory-field-label`;
        }
        labelClasses = this._makeCssClassesObj( classesStr );

        let fieldErrorWrapperClasses = {};
        classesStr = `field-error-wrapper ${type}-error-wrapper` ;
        fieldErrorWrapperClasses = this._makeCssClassesObj( classesStr );

        let fieldClasses = {};
        classesStr = `form-field ${type}-field ${customCssClass}`;
        if ( this.isMandatory ) {
            classesStr += ` mandatory-field`;
        }
        fieldClasses = this._makeCssClassesObj( classesStr );

        let nestedFieldContainerClasses = {};
        classesStr = `fe-field-container fe-${type}-wrapper`;
        nestedFieldContainerClasses = this._makeCssClassesObj( classesStr );

        let classes: any = {
            fieldMainWrapperClasses,
            fieldWrapperClasses,
            fieldLabelContainerClasses,
            fieldContainerClasses,
            fieldDescWrapperClasses,
            fieldDescContainerClasses,
            labelClasses,
            fieldErrorWrapperClasses,
            fieldClasses,
            nestedFieldContainerClasses
        };
        return classes;
    }

    _makeCssClassesObj( cssClassesStr: string ): any {
        let cssClassesObj = {};
        let cssClassArr = cssClassesStr.trim().split(' ')
        cssClassArr.forEach( ( cssClass ) => {
            cssClassesObj[ cssClass ] = true;
        } );
        return cssClassesObj;
    }

    getFieldStyles() {
        let fieldLabelContainerStyle: any = {};
        let fieldMainWrapperStyle = {};
        let config = this.config;
        let labelWidth = config.labelWidth;
        let labelMargin = config.labelMargin;

        if (labelWidth) {
            fieldLabelContainerStyle.width = `${labelWidth}px`;
        }
        
        let fieldWidth = this.defaultFieldWidth;
        if ( config.width ) {
            fieldWidth = config.width;
        }
        if ( fieldWidth ) {
            this.render.setStyle( this.elemRef.nativeElement, 'width', fieldWidth );
        }

        if (labelMargin) {
            let margin: string = `${labelMargin}px`;
            let marginSide: string = 'margin-top';

            switch (config.labelPosition) {
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
            fieldLabelContainerStyle[marginSide] = margin;
        }

        if (config.marginLeft) {
            fieldMainWrapperStyle['margin-left'] = config.marginLeft;
        }

        if (config.marginRight) {
            fieldMainWrapperStyle['margin-right'] = config.marginRight;
        }

        if (config.marginTop) {
            fieldMainWrapperStyle['margin-top'] = config.marginTop;
        }

        if (config.marginBottom) {
            fieldMainWrapperStyle['margin-bottom'] = config.marginBottom;
        }

        let inlineStyle = {
            fieldMainWrapperStyle,
            fieldWrapperStyle: {},
            fieldDescWrapperStyle: {},
            fieldDescContainerStyle: {},
            fieldLabelContainerStyle,
            fieldContainerdStyle: {},
            labelStyle: {},
            fieldStyle: {},
            nestedFieldContainerStyle: {}

        };
        return inlineStyle;
    }

    get isMandatory(): boolean {
        return ( this.config.validations && this.config.validations[ 'required' ] && this.config.validations.required.value);
    }

    get flexiLabel(): string {
        return this.config.flexiLabel;
    }

    get isValid() {
        return this.control.valid;
    }

    get isInvalid() {
        return this.control.invalid;
    }

    get hasError() {
        return this.isInvalid && (this.dirty || this.touched);
    }

    get dirty() {
        return this.control.dirty;
    }

    get touched() {
        return this.control.touched;
    }
    get control(): AbstractControl {
        return this.group.controls[ this.flexiLabel ];
    }

    hasNgValidation( validationName: string ) {
        return ( this.config.validations && this.config.validations[ validationName ]  && this.config.validations[ validationName ].value );
    }

    hasCustomValidation( validationName: string ) {
        return ( this.config.customValidations && this.config.customValidations[ validationName ] );
    }

    hasFormClassValidation( validationName: string ) {
        return ( this.config.formClassValidations && this.config.formClassValidations[ validationName ] );
    }

    hasValidation( validationName: string ) {
        return ( this.hasNgValidation( validationName ) || this.hasCustomValidation( validationName ) || this.hasFormClassValidation( validationName ) );
    }

    get hasMinLength() {
        return this.hasValidation( 'minLength' );
    }

    get hasMaxLength() {
        return this.hasValidation( 'maxLength' );
    }
    get minLength() {
        if ( this.hasMinLength ) {
            return this.config.validations.minLength.value;
        }
        return 0;
    }

    get maxLength() {
        if ( this.hasMaxLength ) {
            return this.config.validations.maxLength.value;
        }
        return 0;
    }

    get hasTextLenghtLimit() {
        return ( this.hasValidation( 'maxLength' ) || this.hasValidation( 'minLength' ) );
    }
  
}
