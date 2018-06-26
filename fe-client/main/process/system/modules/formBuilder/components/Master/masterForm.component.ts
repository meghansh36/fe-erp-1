import { FieldControlService } from '@L3Process/system/modules/formBuilder/services/fieldControl.service';
import { Component, ViewEncapsulation, OnInit, DoCheck, ComponentFactoryResolver, ViewContainerRef, ViewChild} from '@angular/core';
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
  instance;
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
    this.masterFormService.savedInstance(this.componentData);

    this.modalRef.close();
  }

  createComponentFunc(component) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
    const viewContainerRef = this.preview;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent(componentFactory);
    this.instance = componentRef.instance;
  }

  update(event) {
    console.log('running event');
    this.instance.placeholder = this.componentData.placeholder;
    this.instance.prefix = this.componentData.prefix;
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
}
