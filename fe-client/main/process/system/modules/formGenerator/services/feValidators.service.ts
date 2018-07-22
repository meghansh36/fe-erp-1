import { Injectable } from '@angular/core';
import { ValidatorFn, Validators, AbstractControl } from '@angular/forms';
import * as _ from 'lodash';
import { CustomValidators } from 'ng4-validators';

@Injectable({
    providedIn: 'root'
})
export class FeValidatorsService {
    public instance;
     public _validators = {
        required: (val: any, control: AbstractControl) => Validators.required,
        maxLength: (val: any, control: AbstractControl) => Validators.maxLength(val),
        minLength: (val: any, control: AbstractControl) => Validators.minLength(val),
        pattern: (val: any, control: AbstractControl) => Validators.pattern(val),
        email: (val: any, control: AbstractControl) => Validators.email,
        commaseperatedemail: (val: any, control: AbstractControl) => this.commaSeparatedEmailValidator,
        range: (val: any, control: AbstractControl) => CustomValidators.range(val) ,//val =[ min, max ]
        min: (val: any, control: AbstractControl) => CustomValidators.min(val),
        max: (val: any, control: AbstractControl) => CustomValidators.max(val),
        minDate: (val: any, control: AbstractControl) => CustomValidators.minDate(val),//'2016-09-09'
        maxDate: (val: any, control: AbstractControl) => CustomValidators.maxDate(val),//'2016-09-09'
        json: (val: any, control: AbstractControl) => CustomValidators.json,
        equalTo: (val: any, control: AbstractControl) => CustomValidators.equalTo(val),
        notEqualTo: (val: any, control: AbstractControl) => CustomValidators.notEqualTo(val),
        equal: (val: any, control: AbstractControl) => CustomValidators.equal(val),
        uuid: (val: any, control: AbstractControl) => CustomValidators.uuid(val),
        base64: (val: any, control: AbstractControl) => CustomValidators.base64,
        digits: (val: any, control: AbstractControl) => CustomValidators.digits,
        url: (val: any, control: AbstractControl) => CustomValidators.url,
        lt: (val: any, control: AbstractControl) => CustomValidators.lt(val),//less than 
        gt: (val: any, control: AbstractControl) => CustomValidators.gt(val),//greater than
        rangeLength: (val: any, control: AbstractControl) => CustomValidators.rangeLength( val ) ,//[ min, max ]
        'number_positive': this.numberPositiveValidator.bind( this ),
        'number_negative': this.numberNegativeValidator.bind( this ),
        'alphanumeric': this.alphanumericValidator.bind( this ),
        'alphabet': this.alphabetValidator.bind( this )
    };

    protected _customValidations = {
        min: this.minValidation.bind( this ),
        max: this.maxValidation.bind( this ),
        minDate: this.minDateValidation.bind( this ),
        maxDate: this.maxDateValidation.bind( this ),
        required: this.requiredValidation.bind( this ),
        range: this.rangeValidation.bind( this ),
        rangeLength: this.rangeLengthValidation.bind( this ),
        'number_positive': this.numberPositiveValidation.bind( this ),
        'number_negative': this.numberNegativeValidation.bind( this ),
        'alphanumeric': this.alphanumericValidation.bind( this ),
        'alphabet': this.alphabetValidation.bind( this ),
        email: this.emailValidation.bind( this ),
        commaseperatedemail: this.commaseperatedemailValidation.bind( this )
    };

    constructor() {
        this.instance = this;
    }

    emailValidation( value?: any ) {
        const message = 'Please provide valid mail address';
        if ( !value ) {
            value = true;
        }
        return FeValidatorsService.getValidation( value, message );
    }
    
    commaseperatedemailValidation( value?: any ) {
        const message = 'Please provide valid mail address(s)';
        if ( !value ) {
            value = true;
        }
        return FeValidatorsService.getValidation( value, message );
    }

    commaSeparatedEmailValidator(control: AbstractControl): { [key: string]: boolean } | null {
        const regExp = /^([\w+-.%]+@[\w-.]+\.[A-Za-z]{2,4})(,[\w+-.%]+@[\w-.]+\.[A-Za-z]{2,4}){0,4}$/;
        if (control.value !== undefined) {
          if (regExp.test(control.value)) {
            return null;
          } else {
            return { 'commaseperatedemail': true };
          }
        }
    }

    minValidation( minValue?: any ) {
        console.log("minValidation", this);
        const message = `Minimum value should be ${minValue}.`;
        return FeValidatorsService.getValidation( minValue,  message);
    }

    maxValidation( maxValue?: any ) {
        const message = `Maximum value should be ${maxValue}.`;
        return FeValidatorsService.getValidation( maxValue,  message);
    }

    minDateValidation( minDate?: any ) {
        const message = `Minimum date should be ${minDate}.`;
        return FeValidatorsService.getValidation( minDate,  message);
    }
    
    maxDateValidation( maxDate?: any ) {
        const message = `Maximum date should be ${maxDate}.`;
        return FeValidatorsService.getValidation( maxDate,  message);
    }

    requiredValidation( value?: any ) {
        const message = `Please provide appropriate value.`;
        return FeValidatorsService.getValidation( value,  message);
    }

    rangeValidation( value?: any ) {
        const message = `Value should be between ${value.min} and ${value.max}.`;
        return FeValidatorsService.getValidation( [ value.min, value.max ],  message);
    }

    rangeLengthValidation( value?: any ) {
        const message = `Value length should be between ${value.min} and ${value.max}.`;
        return FeValidatorsService.getValidation( [ value.min, value.max ],  message);
    }

    numberNegativeValidation ( value?: any ) {
        const message = `Please provide number negative only.`;
        return FeValidatorsService.getValidation( value,  message);
    }

    alphanumericValidation( value?: any ) {
        const message = `Alphanumric values allowed only.`;
        return FeValidatorsService.getValidation( value,  message);
    }
    
    alphabetValidation( value?: any ) {
        const message = `Alphabets values allowed only.`;
        return FeValidatorsService.getValidation( value,  message);
    }

    numberPositiveValidation ( value?: any ) {
        const message = `Please provide number positive only.`;
        return FeValidatorsService.getValidation( value,  message);
    }

    numberNegativeValidator ( value: any, control: AbstractControl ) {
        return this._validators[ 'pattern' ](value, control);
    }

    alphanumericValidator( value: any, control: AbstractControl ) {
        return this._validators[ 'pattern' ](value, control);
    }
    
    alphabetValidator( value: any, control: AbstractControl ) {
        return this._validators[ 'pattern' ](value, control);
    }

    numberPositiveValidator ( value: any, control: AbstractControl ) {
        console.log("numberPositiveValidator", this, this._validators);
        return this._validators[ 'pattern' ](value, control);
    }

    getCustomValidation( validationName: string, value?: any ) {
        if ( !this._customValidations[ validationName ] ) {
            console.log(`Custom Validation ${validationName} implementation does not exist.`);
            return '';
        }
        console.log('getCustomValidation this', this);
        return {[validationName]: this._customValidations[ validationName ].call(this, value)};
    }


    getValidator( validationConf: any, control: AbstractControl ): ValidatorFn | null {
        const validationName: string = validationConf.name;
        const validationValue: any = validationConf.value;
        if ( this._validators[ validationName ]  && validationValue ) {
            return this._validators[ validationName ]( validationValue, control );
        }
        return null;
    }

    getValidators( validationConf: any, control: AbstractControl ) {
        try {
            const validators = [];
            for( let name in validationConf )  {
                let validation = _.assign({}, validationConf[ name ]);
                //if ( validation.value ) {
                    validation.name = name;
                    let validator: ValidatorFn | null = this.getValidator( validation, control );
                    if ( validator ) {
                        validators.push( validator );
                    }
               // }
            }
            return  validators; 
        } catch (error) {
            console.log( error )
        }
        
    }

    transformToValidErr( validations ) {
        let errors = [];
        for ( let vName in validations ) {
            let validation = _.assign( {}, validations[ vName ] );
            validation.name = vName.toLowerCase();
            if ( vName == 'maxLength' || vName == 'minLength' ) {
                let message = validation.message;
                message = message.replace( 'XXLENGTHXX', validation.value );
                validation.message = message;
            }
            errors.push( validation );
        }
        return errors;
    }

    static getValidation( value, message ) {
        const validation = {
            value,
            message
        };
        return validation;
    }

}
