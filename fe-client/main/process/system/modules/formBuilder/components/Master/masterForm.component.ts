import { FieldControlService } from '@L3Process/system/modules/formBuilder/services/fieldControl.service';
import { Component, ViewEncapsulation, OnInit, DoCheck,
  ComponentFactoryResolver, ViewContainerRef, ViewChild, OnDestroy } from '@angular/core';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import { FormMasterService } from '@L3Process/system/modules/formBuilder/services/formMaster.service';
import { clearOverrides } from '@angular/core/src/view';
import { builderFieldCompInterface } from './masterForm.interface';
import * as _ from 'lodash';
import { FormJsonService } from '@L3Process/system/modules/formBuilder/services/formJson.service';
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
  
  backupProperties;


  componentData = <builderFieldCompInterface>{};

  modalRef: NgbModalRef;
  instance;
  showEdit: boolean;
  currentKey;
  applicableProperties={
  label:true,
  labelPosition:true,
  labelWidth:true,
  labelMargin:true,
  placeholder:true,
  description:true,
  tooltip:true,
  errorLabel:true,
  inputMask:true,
  prefix:true,
  suffix:true,
  customCssClass:true,
  tabIndex:true,
  clearValue:true,
  hidden:true,
  disabled:true,
  defaultValue:true,
  sqlQuery:true,
  jsFunction:true,
  jsonLogic:true,
  nonPersistent:true,
  appliedValidation:true,
  minimumLength:true,
  maximumLength:true,
  regularExpression:true,
  customErrorFunction:true,
  customValidationFunction:true,
  JSONLogic:true,
  marginTop:true,
  marginRight:true,
  marginBottom:true,
  marginLeft:true,
  customFunction:true,
  conditionalJsonLogic:true,
  }


  @ViewChild('preview', {read: ViewContainerRef}) preview: ViewContainerRef;
  constructor(private modalService: NgbModal, private masterFormService: FormMasterService,
              public fieldControlService: FieldControlService,
              private componentFactoryResolver: ComponentFactoryResolver,
              private formJsonService: FormJsonService
    ) {
    this.Json.components.push(this.componentData.name);
    // console.log(this.fieldControlService.getFieldRef().ref);

  }

  ngDoCheck() {}

  ngOnInit() {
    this.modalRef = this.masterFormService.getModalRef();
    const component = this.fieldControlService.getFieldRef().component;
    this.createComponentFunc(component);
  }

  close() {
    this.modalRef.close();
  }

  onSubmit(form) {
    form.name = this.instance.fieldControlService.component.name;
    form.type = this.instance.fieldControlService.component.type;

    console.log("submit",form);
    this.Json.components.push(form);
    JSON.stringify(this.Json);
    
    this.masterFormService.setCurrentKey(this.currentKey);
    this.masterFormService.setProperties(form);
    this.formJsonService.buildFinalJSON();
    this.modalRef.close();
  }

  onReset() {
    this.componentData = _.assign({}, this.backupProperties);
    this.instance.properties = _.assign({}, this.backupProperties);
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
    this.backupProperties = _.assignIn({}, propsFromBuilder);
    this.instance.properties = this.backupProperties;
    this.componentData = _.assignIn({}, this.instance.properties);
  }

  update(event) {

    if (this.componentData.hideLabel) {this.componentData.label = undefined; }
    console.log("update event", this.componentData);
    //this.masterFormService.setProperties(this.componentData);
    this.instance.properties = _.assignIn({}, this.componentData);
    console.log('instance props', this.instance.properties);
  }

  ngOnDestroy() {}


}
