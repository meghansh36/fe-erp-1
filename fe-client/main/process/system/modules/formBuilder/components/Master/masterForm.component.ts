import { FieldControlService } from '@L3Process/system/modules/formBuilder/services/fieldControl.service';
import { Component, ViewEncapsulation, OnInit, DoCheck} from '@angular/core';
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

export class FeMasterFormComponent implements OnInit,DoCheck{

  Json = {id: 'FRM000001', name: 'form',code:'FRM000001',label:'My Form',components: []};


  componentData= <builderFieldCompInterface>{};






  modalRef: NgbModalRef;
  tooltipBoolean = false;
  currentEvent;

  constructor(private modalService: NgbModal, private masterFormService: FormMasterService,public fieldControlService:FieldControlService) {
    this.Json.components.push(this.componentData.name);
    // console.log(this.fieldControlService.getFieldRef().ref);

  }

  ngDoCheck() {
  if(this.componentData.tooltip){

    this.tooltipBoolean=true;

   }
   else
   {
     this.tooltipBoolean=false;

   }
   console.log(this.fieldControlService.getFieldRef().ref);
  }

  ngOnInit() {
    this.modalRef = this.masterFormService.getModalRef();

  }

  close() {
    this.modalRef.close();
  }

  onSubmit(form){

    this.Json.components.push(form);
     console.log(this.componentData)
     console.log(form);
    JSON.stringify(this.Json);


    this.modalRef.close();



  }
}
