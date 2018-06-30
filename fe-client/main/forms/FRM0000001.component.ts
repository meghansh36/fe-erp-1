import { Component, OnInit, ViewChild, AfterViewInit, Renderer2 } from '@angular/core';
import { FeFormComponent } from '@L1Process/system/modules/formGenerator/components/feForm/feForm.component';
import { DefaultFormComponent } from './DefaultForm.component';
import { FeFormSchemaService } from '../services/formSchema.service';
import { FeValidatorsService } from '../services/validators.service';
import { FeDependentService } from '../services/dependent.service';
import { NgbDatepickerConfig, NgbDateStruct, NgbDateParserFormatter, NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';
import { ValidatorFn, AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';

@Component({
    selector: 'FRM0000001',
    templateUrl: 'DefaultForm.component.html'
})
export class FRM0000001Component extends DefaultFormComponent implements OnInit, AfterViewInit {
    @ViewChild(FeFormComponent) form: FeFormComponent;

    debouncer: any;
    protected code: String = 'FRM0000001';
    constructor(protected formSchemaService: FeFormSchemaService, public validator: FeValidatorsService , public dependent: FeDependentService) {
        super(formSchemaService, validator , dependent);
    }

    A(control: AbstractControl): { [key: string]: any } {
        return new Promise(resolve => {
            this.debouncer = setTimeout(() => {
                let isValid = /\d/.test(control.value);
                if (!isValid) {
                    resolve({ 'A': true });
                }
                else {
                    resolve(null);
                }
            }, 1000);
        });
    }

}
