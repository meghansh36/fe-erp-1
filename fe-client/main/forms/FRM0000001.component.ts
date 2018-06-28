import { Component, OnInit, ViewChild, AfterViewInit, Renderer2 } from '@angular/core';
import { FeFormComponent } from '@L1Process/system/modules/formGenerator/components/feForm/feForm.component';
import { DefaultFormComponent } from './DefaultForm.component';
import { FeFormSchemaService } from '../services/formSchema.service';
import { FeValidatorsService } from '../process/system/modules/formGenerator/services/validators.service';
import { NgbDatepickerConfig, NgbDateStruct, NgbDateParserFormatter, NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';
import { ValidatorFn, AbstractControl } from '@angular/forms';

@Component({
    selector: 'FRM0000001',
    templateUrl: 'DefaultForm.component.html'
})
export class FRM0000001Component extends DefaultFormComponent implements OnInit, AfterViewInit {
    @ViewChild(FeFormComponent) form: FeFormComponent;

    constructor(protected formSchemaService: FeFormSchemaService, public validator: FeValidatorsService, public render: Renderer2) {
        super(formSchemaService, validator, render);
    }

    protected code: String = 'FRM0000001';

    checkPattern() {
        return function (control: AbstractControl): { [key: string]: boolean } | null {
            let isValid = /\d/.test(control.value);
            if (!isValid) {
                return { 'checkpattern': true };
            }
            return null;
        }
    }

}
