import { Injectable } from '@angular/core';
import { ValidatorFn, Validators } from '@angular/forms';

@Injectable({
    providedIn: 'root'
})
export class FeValidatorsService {
    private validations = {
        'required': (val) => Validators.required,
        'maxLength': (val) => Validators.maxLength(val),
        'minLength': (val) => Validators.minLength(val),
        'pattern': (val) => Validators.pattern(val),
        'email': (val) => Validators.email
    }

    getValidator(reqVal) {
        let errorArray = [];
        reqVal.forEach((err) => {
            let val: ValidatorFn = this.validations[err.name](err.value);
            errorArray.push(val);
        });
        return errorArray;
    }

    toLowerCase(reqVal) {
        reqVal.forEach((val) => {
            val.name = val.name.toLowerCase();
        });
        return reqVal;
    }

}
