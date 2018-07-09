import { Component, Renderer2, ElementRef } from '@angular/core';
import { NgbTimepickerConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import { BaseComponent } from '@L3Process/system/modules/formGenerator/components/Base.component';
import { ValidatorsService } from '@L3Process/system/modules/formGenerator/services/validators.service';
import { DependentService } from '@L3Process/system/modules/formGenerator/services/dependent.service';

@Component({
  selector: 'fe-time',
  styleUrls: ['feTime.component.css'],
  templateUrl: 'feTime.component.html'
})
export class FeTimeComponent  extends BaseComponent{
  time: NgbTimeStruct = { hour: 0, minute: 0, second: 0 };

  constructor(public elemRef: ElementRef, config: NgbTimepickerConfig,public validator: ValidatorsService, public dependent: DependentService, public render: Renderer2) {
    super(elemRef, validator, render);
    config.seconds = true;
    config.spinners = false;
  }
}
