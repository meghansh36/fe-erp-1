import { Component, Renderer2, ElementRef } from '@angular/core';
import { NgbTimepickerConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
//import { FormBuilder } from '@angular/forms'
import { FeBaseComponent } from '../feBase.component';

import { FeFormSchemaService } from '../../../../../../services/formSchema.service';
import { FeValidatorsService } from '../../services/validators.service';

@Component({
  selector: 'fe-time',
  styleUrls: ['feTime.component.css'],
  templateUrl: 'feTime.component.html'
})
export class FeTimeComponent  extends FeBaseComponent{
  time: NgbTimeStruct = { hour: 0, minute: 0, second: 0 };

  constructor(public elemRef: ElementRef, config: NgbTimepickerConfig, public formSchemaService: FeFormSchemaService, public validator: FeValidatorsService, public render: Renderer2) {
    super(elemRef, formSchemaService, validator, render);
    config.seconds = true;
    config.spinners = false;
  }
}
