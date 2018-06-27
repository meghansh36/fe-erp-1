import { ComponentFactoryResolver, ComponentRef, Directive, Input, OnChanges, OnInit, Type, ViewContainerRef } from '@angular/core';
import { FormGroup, NG_VALIDATORS, NG_ASYNC_VALIDATORS, Validator, FormControl, ValidationErrors } from '@angular/forms';


@Directive({
    selector: '[customValidation]',
    providers: [{ provide: NG_VALIDATORS, useExisting: ValidationsDirective, multi: true }]
})
export class ValidationsDirective implements Validator {
    @Input()
    customMin: number;

    constructor() { }

    validate(c: FormControl): {[key: string]: any} {
        let v = c.value;
        return ( v < this.customMin)? {"customMin": true} : null;
    }

}
