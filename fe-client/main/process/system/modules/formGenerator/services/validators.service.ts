import { Injectable } from '@angular/core';
import { ValidatorFn, Validators, AbstractControl } from '@angular/forms';

@Injectable({
    providedIn: 'root'
})
export class FeValidatorsService {
    private validations = {
        'required': (val) => Validators.required,
        'maxLength': (val) => Validators.maxLength(val),
        'minLength': (val) => Validators.minLength(val),
        'pattern': (val) => Validators.pattern(val),
        'email': (val) => Validators.email,
        'ageRange': (val) => {
            return function (control: AbstractControl): { [key: string]: boolean } | null {
                if (control.value !== undefined && (isNaN(control.value) || control.value < val)) {
                    return { 'agerange': true };
                }
                return null;
            };
        },
        'yearRange': (val) => {
            return function (control: AbstractControl): { [key: string]: string } | null {
                if (control.value !== undefined && (isNaN(control.value.year) || control.value.year < val)) {
                    return { 'yearrange': 'true' };
                }
                return null;
            };
        }
    }

    getValidator(reqVal) {
        let errorArray = [];
        reqVal.forEach((err) => {
            let val: ValidatorFn = this.validations[err.name](err.value);
            errorArray.push(val);
        });
        console.log(errorArray);
        return errorArray;
    }

    toLowerCase(reqVal) {
        reqVal.forEach((val) => {
            val.name = val.name.toLowerCase();
        });
        return reqVal;
    }

}
