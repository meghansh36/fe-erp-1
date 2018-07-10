import { Component } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { DefaultFormComponent } from '@L3Main/forms/DefaultForm.component';
import { FormSchemaService } from '@L3Main/services/FormSchema.service';
import { DependentService } from '@L3Process/system/modules/formGenerator/services/dependent.service';

@Component({
    selector: 'FRM0000001',
    templateUrl: 'DefaultForm.component.html'
})
export class FeFRM0000001Component extends DefaultFormComponent {
    constructor(public formSchemaService: FormSchemaService, public dependent: DependentService) {
        super(formSchemaService);
        this.instance = this;
        this.code = 'FRM0000001';

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

    onUserNameChanged(...args) {
        console.log("Form class onUserNameChanged called argument:", args);
    }

    onPassWordInput(...args) {
        console.log("Form class onPassWordInput called argument:", args);
    }

    submitForm(...args) {
        console.log("Form Submitted",args);
    }

}
