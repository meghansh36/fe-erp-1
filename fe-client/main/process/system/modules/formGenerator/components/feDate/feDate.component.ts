import { Component } from '@angular/core';
import { BaseComponent } from '@L3Process/system/modules/formGenerator/components/Base.component';
import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { FeDateFormatterService } from '@L1Process/system/services/feDateFormatter.service';
  
@Component({
  selector: 'fe-date',
  styleUrls: ['feDate.component.css'],
  templateUrl : 'feDate.component.html',
  providers: [ {
    provide: NgbDateParserFormatter,
    useClass: FeDateFormatterService
  } ]
})
export class FeDateComponent extends BaseComponent  {
  
}
