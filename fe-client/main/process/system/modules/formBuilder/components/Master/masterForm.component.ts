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
    console.log("ngOninit called in master ");
    this.modalRef = this.masterFormService.getModalRef();
    const component = this.fieldControlService.getFieldRef().component.component;
    console.log(component);
    this.createComponentFunc(component);
  }

  close() {
    this.modalRef.close();
  }

  onSubmit(form) {
    form.name=this.instance.fieldControlService.component.name;
    form.type=this.instance.fieldControlService.component.type;

    console.log(form);
    this.Json.components.push(form);
    console.log(this.instance);
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
    if(this.masterFormService.getProperties()){
    this.instance.properties=this.masterFormService.getProperties();
    }
    console.log('create maseter comp',this.instance.properties);
    this.componentData=this.instance.properties;

  }

  update(event) {

    // if ( !this.componentData.hideLabel) {
    //   this.instance.properties.label = this.componentData.label;
    // } else {
    //   this.instance.properties.label = undefined;
    // }

    // this.instance.properties.suffix = this.componentData.suffix;
    // this.instance.properties.description = this.componentData.description;
    // this.instance.properties.tooltip = this.componentData.tooltip;

    if (this.componentData.hideLabel) {this.componentData.label = undefined;}

    this.instance.properties = {
      ...this.componentData
    };
    console.log("master component update ",this.instance.properties);
  }


}
