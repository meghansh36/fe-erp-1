import { Component, ViewChild, ComponentFactoryResolver, ViewContainerRef, DoCheck, HostListener } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { FormMasterService } from '@L3Process/system/modules/formBuilder/services/formMaster.service';
import { FieldControlService } from '@L3Process/system/modules/formBuilder/services/fieldControl.service';
import { FormJsonService } from '@L3Process/system/modules/formBuilder/services/formJson.service';
import { DragulaService } from 'ng2-dragula';
import { FormBuilderService } from '@L3Process/system/modules/formBuilder/services/formBuilder.service';
import { SortablejsOptions } from 'angular-sortablejs';
import { SortablejsService } from 'angular-sortablejs/dist/src/sortablejs.service';

// import { FieldRenderDirective } from '@L3Process/system/modules/formBuilder/directives/fieldRender.directive';

@Component({
  selector: 'form-builder',
  templateUrl: './formBuilder.component.html',
  styleUrls: ['./formBuilder.component.css']
})
export class FeFormBuilderComponent implements DoCheck {

  @ViewChild('host', {read: ViewContainerRef}) host: ViewContainerRef;
  @ViewChild('content') content;
  cond: Boolean = false;
  basic: String = 'basic';
  advanced: String = 'advanced';
  modalRef: NgbModalRef;
  component: any;
  finalJSON;
  options = {};

  constructor(private bootstrapService: NgbModal,
              private formBuilderService: FormBuilderService,
              private masterFormService: FormMasterService,
              private componentFactoryResolver: ComponentFactoryResolver,
              private fieldControlService: FieldControlService,
              private formJsonService: FormJsonService,
              private sortableService: SortablejsService
              ) {
                // this.dragulaService.setOptions('bag-one', {
                //   revertOnSpill: true,
                //   copy: function(el, source) {
                //     return source.id === 'not_copy';
                //   }
                // });

                // this.dragulaService.drop.subscribe((value) => {
                //   const componentName = value[1].attributes[2].nodeValue;
                //   this.createComponentFunc(this.formBuilderService.getComponent(componentName));
                // });
                this.options = {
                  group: 'dnd',
                  onAddOriginal: (evt) => {
                    console.log(evt);
                     evt.item.innerHTML = '';
                     evt.item.className = 'no_show';

                     this.dropComplete(this.formBuilderService.getComponent(evt.clone.attributes[2].nodeValue), evt.newIndex);
                  },
                  onUpdate: function(evt) {
                    console.log('new evt', evt);
                  }
                };

              }

     ngDoCheck() {
       this.finalJSON = this.formJsonService.getFinalJSON();

     }


  dropComplete(component, index) {
      this.createComponentFunc(component,index);
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

  createComponentFunc(component, index){
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
    const viewContainerRef = this.host;
    const key = this.generateNewKey();
    this.masterFormService.setCurrentKey(key);
    const componentRef = viewContainerRef.createComponent(componentFactory,index);
    this.fieldControlService.setFieldRef(componentRef, this, component);
    this.formJsonService.addComponentToMasterJSON(key, componentRef);
  }

}
