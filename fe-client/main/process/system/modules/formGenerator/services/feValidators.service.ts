import { Injectable } from '@angular/core';
import { ValidatorFn, Validators, AbstractControl } from '@angular/forms';
import * as _ from 'lodash';


@Injectable({
    providedIn: 'root'
})
export class FeValidatorsService {
    
    private validations = {
        required: (val: any, control: AbstractControl) => Validators.required,
        maxLength: (val: any, control: AbstractControl) => Validators.maxLength(val),
        minLength: (val: any, control: AbstractControl) => Validators.minLength(val),
        pattern: (val: any, control: AbstractControl) => Validators.pattern(val),
        email: (val: any, control: AbstractControl) => Validators.email,
        commaseperatedemail: (val: any, control: AbstractControl) => this.commaSeparatedEmailValidator
    };

    commaSeparatedEmailValidator = function (control: AbstractControl): { [key: string]: boolean } | null {
        const regExp = /^([\w+-.%]+@[\w-.]+\.[A-Za-z]{2,4})(,[\w+-.%]+@[\w-.]+\.[A-Za-z]{2,4}){0,4}$/;
        if (control.value !== undefined) {
          if (regExp.test(control.value)) {
            return null;
          } else {
            return { 'commaseperatedemail': true };
          }
        }
    }

    getValidator( validationConf: any, control: AbstractControl ): ValidatorFn | null {
        const validationName: string = validationConf.name;
        const validationValue: any = validationConf.value;
        if ( this.validations[ validationName ]  && validationValue ) {
            return this.validations[ validationName ]( validationValue, control );
        }
        return null;
    }

    getValidators( validationConf: any, control: AbstractControl ) {
        try {
            const validators = [];
            for( let name in validationConf )  {
                let validation = _.assign({}, validationConf[ name ]);
                if ( validation.value ) {
                    validation.name = name;
                    let validator: ValidatorFn | null = this.getValidator( validation, control );
                    if ( validator ) {
                        validators.push( validator );
                    }
                }
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
                message = message.replace( 'XXLENGTHXX', validation.value )
                validation.message = message
            }
            errors.push( validation );
        }
        return errors;
    }

}
