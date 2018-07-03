import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { DefaultFormComponent } from './DefaultForm.component';
import { FeFormSchemaService } from '../services/formSchema.service';
import { FeValidatorsService } from '../process/system/modules/formGenerator/services/validators.service';
import { FeDependentService } from '../process/system/modules/formGenerator/services/dependent.service';
import { AbstractControl } from '@angular/forms';

import { log } from 'util';

@Component({
    selector: 'FRM0000001',
    templateUrl: 'DefaultForm.component.html'
})
export class FRM0000001Component extends DefaultFormComponent {
    protected code: String = 'FRM0000001';
    public componentInstances = {};
    constructor(public formSchemaService: FeFormSchemaService, public dependent: FeDependentService) {
        super(formSchemaService, dependent);
        super.setChildForm(this);
    }

    asyncCustomPatternValidator(control: AbstractControl): { [key: string]: any } {
        return new Promise(resolve => {
            setTimeout(() => {
                let isValid = /\d/.test(control.value);
                if (!isValid) {
                    resolve({ 'customPattern': true });
                } else {
                    resolve(null);
                }
            }, 1000);
        });
    }
    
    onUserNameChanged( event ) {
        console.log("Form class onUserNameChanged called argument:", event);
    }

    onPassWordInput( event ) {
        console.log("Form class onPassWordInput called argument:", event);
    }
}
