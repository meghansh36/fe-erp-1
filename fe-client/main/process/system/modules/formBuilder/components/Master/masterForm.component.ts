import { FieldControlService } from '@L3Process/system/modules/formBuilder/services/fieldControl.service';
import { Component, ViewEncapsulation, OnInit, DoCheck,
  ComponentFactoryResolver, ViewContainerRef, ViewChild, OnDestroy } from '@angular/core';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import { FormMasterService } from '@L3Process/system/modules/formBuilder/services/formMaster.service';
import { clearOverrides } from '@angular/core/src/view';
import { builderFieldCompInterface } from './masterForm.interface';
import * as _ from 'lodash';

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
  currentKey;
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
    this.createComponentFunc(component);
  }

  close() {
    this.modalRef.close();
  }

  onSubmit(form) {
    form.name = this.instance.fieldControlService.component.name;
    form.type = this.instance.fieldControlService.component.type;

    console.log(form);
    this.Json.components.push(form);
    JSON.stringify(this.Json);
    this.masterFormService.setCurrentKey(this.currentKey);
    this.masterFormService.setProperties(form);

    this.modalRef.close();
  }

  createComponentFunc(component) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
    const viewContainerRef = this.preview;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent(componentFactory);
    this.instance = componentRef.instance;
    this.instance.showEdit = false;
    this.currentKey = this.masterFormService.getCurrentKey();
    console.log("current key in master form", this.currentKey);
    const propsFromBuilder = this.masterFormService.getProperties(this.currentKey);
    this.instance.properties = _.assignIn({}, propsFromBuilder);
    this.componentData = _.assignIn({}, this.instance.properties);
  }

  update(event) {

    // if ( !this.componentData.hideLabel) { const masterJSON = this.masterJsonService.getMasterJSON();
    //   this.instance.properties.label = this.componentData.label;
    // } else {
    //   this.instance.properties.label = undefined;
    // }

    // this.instance.properties.suffix = this.componentData.suffix;
    // this.instance.properties.description = this.componentData.description;
    // this.instance.properties.tooltip = this.componentData.tooltip;

    if (this.componentData.hideLabel) {this.componentData.label = undefined; }
    console.log(this.componentData);
    //this.masterFormService.setProperties(this.componentData);
    this.instance.properties = _.assignIn({}, this.componentData);
    console.log('instance props', this.instance.properties);
  }

  ngOnDestroy() {}


}
