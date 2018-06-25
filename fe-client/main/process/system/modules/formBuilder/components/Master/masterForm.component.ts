import { Component, ViewEncapsulation, OnInit} from '@angular/core';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import { FormMasterService } from '@L3Process/system/modules/formBuilder/services/formMaster.service';


@Component(
{
  selector: 'form-master',
  templateUrl: './masterForm.component.html',
  styleUrls: ['./masterForm.component.css'],
  encapsulation: ViewEncapsulation.None,

}
)

export class FeMasterFormComponent implements OnInit {

  modalRef: NgbModalRef;
  constructor(private modalService: NgbModal, private masterFormService: FormMasterService) {
  }

  ngOnInit() {
    this.modalRef = this.masterFormService.getModalRef();
    console.log(this.modalRef);
  }

  close() {
    this.modalRef.close();
  }
}
