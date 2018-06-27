import { Component, ViewChild, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { FormMasterService } from '@L3Process/system/modules/formBuilder/services/formMaster.service';
import { FieldControlService } from '@L3Process/system/modules/formBuilder/services/fieldControl.service';
import { FormJsonService } from '@L3Process/system/modules/formBuilder/services/formJson.service';

// import { FieldRenderDirective } from '@L3Process/system/modules/formBuilder/directives/fieldRender.directive';

@Component({
  selector: 'form-builder',
  templateUrl: './formBuilder.component.html',
  styleUrls: ['./formBuilder.component.css']
})
export class FeFormBuilderComponent{

  @ViewChild('host', {read: ViewContainerRef}) host: ViewContainerRef;
  @ViewChild('content') content;
  cond: Boolean = false;
  basic: String = 'basic';
  advanced: String = 'advanced';
  modalRef: NgbModalRef;
  component: any;

  constructor(private bootstrapService: NgbModal,
              private masterFormService: FormMasterService,
              private componentFactoryResolver: ComponentFactoryResolver,
              private fieldControlService: FieldControlService,
              private formJsonService: FormJsonService
              ) {}


  dropComplete(event) {
    console.log(event);
    this.component = event.dragData;
    this.createComponentFunc(this.component);
    this.openModal();

  }

  openModal() {
    console.log('modal');
    this.modalRef = this.bootstrapService.open(this.content, {size: 'lg'});
    this.masterFormService.setModalRef(this.modalRef);
  }

  generateNewKey() {
    return  '_' + Math.random().toString(36).substr(2, 9);
  }

  createComponentFunc(componentObj) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentObj.component);
    const viewContainerRef = this.host;
    const key = this.generateNewKey();
    this.masterFormService.setCurrentKey(key);
    const componentRef = viewContainerRef.createComponent(componentFactory);
    console.log('in form builder', componentRef.instance.uniqueKey);
    this.fieldControlService.setFieldRef(componentRef, this, componentObj);
    this.formJsonService.addComponentToMasterJSON(key, componentRef);
  }

}
