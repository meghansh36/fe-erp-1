import { ComponentFactoryResolver, ComponentRef, Directive, Input, OnChanges, OnInit, Type, ViewContainerRef } from '@angular/core';
import { FormGroup, NG_VALIDATORS, NG_ASYNC_VALIDATORS, Validator, FormControl, ValidationErrors } from '@angular/forms';


@Directive({
    selector: '[validation]',
    providers: [{ provide: NG_VALIDATORS, useExisting: ValidationsDirective, multi: true }]
})
export class ValidationsDirective implements Validator {

    constructor() { }

    validate(c: FormControl): ValidationErrors {
        const Value = Number(c.value);
        console.log(Value);
        const isValid = Value > 8;
        const message = {
            'min': {
                'message': 'The Length should be greater than 8 '
            }
        };
        return isValid ? null : message;
    }

}
