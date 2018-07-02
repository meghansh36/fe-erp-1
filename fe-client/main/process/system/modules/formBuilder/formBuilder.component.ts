import { Component, ViewChild, ComponentFactoryResolver, ViewContainerRef, DoCheck } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { FormMasterService } from '@L3Process/system/modules/formBuilder/services/formMaster.service';
import { FieldControlService } from '@L3Process/system/modules/formBuilder/services/fieldControl.service';
import { FormJsonService } from '@L3Process/system/modules/formBuilder/services/formJson.service';
import { DragulaService } from 'ng2-dragula';
import { FormBuilderService } from '@L3Process/system/modules/formBuilder/services/formBuilder.service';

// import { FieldRenderDirective } from '@L3Process/system/modules/formBuilder/directives/fieldRender.directive';
@Component({
  selector: 'form-builder',
  templateUrl: './formBuilder.component.html',
  styleUrls: ['./formBuilder.component.css']
})
export class FeFormBuilderComponent implements DoCheck{

  @ViewChild('host', {read: ViewContainerRef}) host: ViewContainerRef;
  @ViewChild('content') content;
  cond: Boolean = false;
  basic: String = 'basic';
  advanced: String = 'advanced';
  modalRef: NgbModalRef;
  component: any;
  finalJSON;
  constructor(private bootstrapService: NgbModal,
              private masterFormService: FormMasterService,
              private componentFactoryResolver: ComponentFactoryResolver,
              private fieldControlService: FieldControlService,
              private formJsonService: FormJsonService,
              private dragulaService: DragulaService,
              private formBuilderService: FormBuilderService
              ) {
                this.dragulaService.setOptions('bag-one', {
                  revertOnSpill: true,
                  copy: function(el, source) {
                    return source.id === 'not_copy';
                  }
                });

                this.dragulaService.drop.subscribe((value) => {
                  //const componentName = value[1].attributes[2].nodeValue;
                  console.log(value);
                  if (value[1].nodeName === 'LI') {
                    value[1].innerHTML = '';
                    value[1].outerHTML = '';
                    const componentName = value[1].attributes[2].nodeValue;
                    const index = this.calculateIndex(value);
                    console.log(componentName);
                    this.dropComplete(this.formBuilderService.getComponent(componentName), index);
                  }
                });

              }


     ngDoCheck(){
       this.finalJSON = this.formJsonService.getFinalJSON();

     }


  calculateIndex(value) {
    const [bag, el, target, source, sibling] = value;
    const children = target.children;

    let index = 0;
    if (sibling === null) {
      return children.length;
    } else {
      for (let i = 0; i < children.length; i++) {
        if (sibling !== children[i]) {
          index++;
        } else {
          break;
        }
      }
     console.log('calculated index', index);
     return index;
    }
  }


  dropComplete(componentObj, index) {
    // console.log(event);
    // this.component = event.dragData;
    this.createComponentFunc(componentObj, index);
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

  createComponentFunc(componentObj, index) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentObj.component);
    const viewContainerRef = this.host;
    const key = this.generateNewKey();
    this.masterFormService.setCurrentKey(key);
    const componentRef = viewContainerRef.createComponent(componentFactory, index);
    this.fieldControlService.setFieldRef(componentRef, this, componentObj);
    this.formJsonService.addComponentToMasterJSON(key, componentRef);
  }

}