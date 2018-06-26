import { Injectable } from '@angular/core';
import { ValidatorFn, Validators } from '@angular/forms';

@Injectable({
    providedIn: 'root'
})
export class FeValidatorsService {
    private validations = {
        'required': (val) => Validators.required,
        'maxLength': (val) => Validators.maxLength(val),
        'minLength': (val) => Validators.minLength(val)
    }

    getValidator(reqVal) {
        let errorArray = [];
        /*reqVal.forEach((err) => {
            errorArray.push(this.validations[err.name](err.value));
        });*/
        console.log('errorArray-1');

    }
}
