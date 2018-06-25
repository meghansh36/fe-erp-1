import { Component, ViewEncapsulation, OnInit} from '@angular/core';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import { FormMasterService } from '@L3Process/system/modules/formBuilder/services/formMaster.service';
import { clearOverrides } from '@angular/core/src/view';
import { builderFieldCompInterface } from './masterForm.interface';


@Component(
{
  selector: 'form-master',
  templateUrl: './masterForm.component.html',
  styleUrls: ['./masterForm.component.css'],
  encapsulation: ViewEncapsulation.None,

}
)

export class FeMasterFormComponent implements OnInit{

  Json = {id: 'FRM000001', name: 'form',code:'FRM000001',label:'My Form',components: []};


  componentData= <builderFieldCompInterface>{};






  modalRef: NgbModalRef;
  constructor(private modalService: NgbModal, private masterFormService: FormMasterService) {
    this.componentData.name = 'alok';
    this.Json.components.push(this.componentData.name);

  }

  ngOnInit() {
    this.modalRef = this.masterFormService.getModalRef();
  }

  close() {
    this.modalRef.close();
  }

  onSubmit(form){
    console.log(form);
  }
}
