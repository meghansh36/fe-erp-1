import { Component, ViewChild, ComponentFactoryResolver, ViewContainerRef} from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { FormMasterService } from '@L3Process/system/modules/formBuilder/services/formMaster.service';
import { window } from 'rxjs/operators';
// import { FieldRenderDirective } from '@L3Process/system/modules/formBuilder/directives/fieldRender.directive';

@Component({
  selector: 'form-builder',
  templateUrl: './formBuilder.component.html',
  styleUrls: ['./formBuilder.component.css']
})
export class FeFormBuilderComponent {

  @ViewChild('host', {read: ViewContainerRef}) host: ViewContainerRef;

  cond: Boolean = false;
  basic: String = 'basic';
  advanced: String = 'advanced';
  modalRef: NgbModalRef;
  component: any;
  constructor(private bootstrapService: NgbModal,
              private masterFormService: FormMasterService,
              private componentFactoryResolver: ComponentFactoryResolver ) {}

  dropComplete(event, content) {
    console.log(event);
    this.modalRef = this.bootstrapService.open(content, {size: 'lg'});
    this.masterFormService.setModalRef(this.modalRef);
    this.component = event.dragData;
    this.createComponentFunc(this.component);
  }

  createComponentFunc(componentObj) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentObj.component);
    const viewContainerRef = this.host;

    const componentRef = viewContainerRef.createComponent(componentFactory);
    console.log(componentRef);
  }

}
