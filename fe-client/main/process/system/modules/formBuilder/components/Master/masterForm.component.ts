import { FieldControlService } from '@L3Process/system/modules/formBuilder/services/fieldControl.service';
import { Component, ViewEncapsulation, OnInit, DoCheck,
  ComponentFactoryResolver, ViewContainerRef, ViewChild, OnDestroy } from '@angular/core';
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

export class FeMasterFormComponent implements OnInit,DoCheck,OnDestroy{

  Json = {id: 'FRM000001', name: 'form',code:'FRM000001',label:'My Form',components: []};


  componentData= <builderFieldCompInterface>{};

  modalRef: NgbModalRef;
  instance;
  showEdit:boolean;
  @ViewChild('preview', {read: ViewContainerRef}) preview: ViewContainerRef;
  constructor(private modalService: NgbModal, private masterFormService: FormMasterService,
    public fieldControlService:FieldControlService, private componentFactoryResolver: ComponentFactoryResolver,
    ) {
    this.Json.components.push(this.componentData.name);
    // console.log(this.fieldControlService.getFieldRef().ref);

  }

  ngDoCheck() {}

  ngOnInit() {
    this.modalRef = this.masterFormService.getModalRef();
    const component = this.fieldControlService.getFieldRef().component.component;
    console.log(component);
    this.createComponentFunc(component);
  }

  close() {
    this.modalRef.close();
  }

  onSubmit(form) {

    this.Json.components.push(form);
     console.log(this.componentData);
     console.log(form);
    JSON.stringify(this.Json);
    this.masterFormService.savedInstance(form);

    this.modalRef.close();
  }

  createComponentFunc(component) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
    const viewContainerRef = this.preview;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent(componentFactory);
    this.instance = componentRef.instance;
    this.instance.showEdit = false;
  }

  update(event) {
    console.log('running event');

    console.log(this.componentData.hideLabel);
    if ( !this.componentData.hideLabel) {
      this.instance.label = this.componentData.label;
    } else {
      this.instance.label = undefined;
    }

    this.instance.suffix = this.componentData.suffix;
    this.instance.description = this.componentData.description;
    this.instance.tooltip = this.componentData.tooltip;
  }

  ngOnDestroy()
  {
    console.log("destroy called");
    this.instance.showEdit=true;
  }

}
