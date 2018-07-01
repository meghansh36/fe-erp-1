import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { DefaultFormComponent } from './DefaultForm.component';
import { FeFormSchemaService } from '../services/formSchema.service';
import { FeValidatorsService } from '../process/system/modules/formGenerator/services/validators.service';


@Component({
    selector: 'FRM0000001',
    templateUrl: 'DefaultForm.component.html'
})
export class FRM0000001Component extends DefaultFormComponent {
    protected code: String = 'FRM0000001';

    constructor(public formSchemaService: FeFormSchemaService) {
        super(formSchemaService);
    }

    
}
