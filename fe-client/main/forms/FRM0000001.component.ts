import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

import { FeFormSchemaService } from '../services/formSchema.service';
import { FeFormComponent } from '@L1Process/system/modules/formGenerator/components/feForm/feForm.component';
import { DefaultFormComponent } from './DefaultForm.component';

@Component({
  selector: 'FRM0000001',
  templateUrl: 'DefaultForm.component.html'
})
export class FRM0000001Component extends DefaultFormComponent implements OnInit, AfterViewInit  {
    @ViewChild(FeFormComponent) form: FeFormComponent;

    constructor(protected formSchemaService: FeFormSchemaService) {
        super(formSchemaService);
    }

    protected code: String = 'FRM0000001';
}
