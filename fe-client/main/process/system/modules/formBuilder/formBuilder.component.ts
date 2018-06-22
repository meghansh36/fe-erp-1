import { Component } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { FormMasterService } from '@L3Process/system/modules/formBuilder/services/formMaster.service';

@Component({
  selector: 'form-builder',
  templateUrl: './formBuilder.component.html',
  styleUrls: ['./formBuilder.component.css']
})
export class FeFormBuilderComponent {
   cond: Boolean = false;
  basic: String = 'basic';
  advanced: String = 'advanced';
  modalRef: NgbModalRef;
  constructor(private bootstrapService: NgbModal, private masterFormService: FormMasterService ) {}

  open(content) {
    console.log(content);
    this.modalRef = this.bootstrapService.open(content, {size: 'lg'});
    this.masterFormService.setModalRef(this.modalRef);
  }
}
