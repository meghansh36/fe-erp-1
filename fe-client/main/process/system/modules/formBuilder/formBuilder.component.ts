import { Component, ViewChild, ComponentFactoryResolver, ViewContainerRef, DoCheck, Renderer2, OnInit, Injector } from '@angular/core';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { NgBootstrapService } from '@L3Process/system/services/NgBootstrap.service';
import { FormMasterService } from '@L3Process/system/modules/formBuilder/services/formMaster.service';
import { FieldControlService } from '@L3Process/system/modules/formBuilder/services/fieldControl.service';
import { FormJsonService } from '@L3Process/system/modules/formBuilder/services/formJson.service';
import { DragulaService } from 'ng2-dragula';
import { FormBuilderService } from '@L3Process/system/modules/formBuilder/services/formBuilder.service';
import { FstComponent } from '@L3Process/system/modules/formBuilder/components/formElements/fst/fst.component';
import * as _ from 'lodash';
// import { FieldRenderDirective } from '@L3Process/system/modules/formBuilder/directives/fieldRender.directive';
@Component({
  selector: 'form-builder',
  templateUrl: './formBuilder.component.html',
  styleUrls: ['./formBuilder.component.css']
})
export class FeFormBuilderComponent implements DoCheck, OnInit {

  @ViewChild('host', {read: ViewContainerRef}) host: ViewContainerRef;
  @ViewChild('buttonHost', {read: ViewContainerRef}) buttonHost: ViewContainerRef;
  @ViewChild('content') content;
  cond: Boolean = false;
  basic: String = 'basic';
  advanced: String = 'advanced';
  modalRef: NgbModalRef;
  //formSettingModalRef: 
  component: any;
  finalJSON;
  formJson: any;
  rootDrop;
  jsonEditorConfig;
  DOMArray: any = [];
  public formJsonHelp;

  constructor(private bootstrapService: NgBootstrapService,
    private masterFormService: FormMasterService,
    private componentFactoryResolver: ComponentFactoryResolver,
    private fieldControlService: FieldControlService,
    private formJsonService: FormJsonService,
    private dragulaService: DragulaService,
    private formBuilderService: FormBuilderService,
    private renderer: Renderer2
  ) {
    this.formJson = this.formJsonService.MasterJSON;
    this.dragulaService.setOptions('bag-one', {
      revertOnSpill: true,
      copy: function (el, source) {
        return source.id === 'not_copy';
      },
      accepts: function(el, target, source, sibling) {
        const targetClassesArr = target.className.trim().split(' ');
        const fieldClassesArr = el.className.trim().split(' ');
        if (_.includes(targetClassesArr, 'buttonDropZone') && _.includes(fieldClassesArr, 'button')) {
          return true;
        } else if (_.includes(targetClassesArr, 'FSTdropZone') || _.includes(targetClassesArr, 'customDropZone')) {
          return true;
        }
      }
    });

    this.dragulaService.drop.subscribe((value) => {
      // const componentName = value[1].attributes[2].nodeValue;
     // console.log("dragulaService.drop.subscribe", value, 'rootDrop', this.rootDrop);
      if (this.rootDrop === undefined) {
        this.rootDrop = value[2];
      }
      if (value[1].nodeName === 'LI') {
        value[1].innerHTML = '';
        value[1].outerHTML = '';
        const componentName = value[1].attributes.getNamedItem('componentName').nodeValue;
        console.log("componentName", componentName);
        const index = this.calculateIndex(value);
        this.dropComplete(this.formBuilderService.getComponent(componentName), index, value);
      }
    });
  }


  ngDoCheck() {
    this.formJsonService.buildFinalJSON();
    this.finalJSON = this.formJsonService.getFinalJSON();
  }

  ngOnInit() {
    this.init()
  }

  update(event) {

  }

  init() {
    this.jsonEditorConfig = {
      mode: 'code', onChange: this.update
    };
    this.formJsonHelp = {
      'simple': {
        'show': false,
        'when': 'number',
        'eq': 15
      },
      'advanced': ['var show; return show = controls.number.value == 150 ? true : false;', 'var show1; return show1 = controls.otherControl.value == 150 ? true : false;'],
      "json": {
        "condition": {
          "and": [
            { "===": [{ "var": "username.value" }, 'apple'] },
            { "===": [{ "var": "number.value" }, 15] }
          ]
        },
        "condition1": {
          "and": [
            { "===": [{ "var": "someControl.value" }, 'someValue'] },
            { "===": [{ "var": "someOtherControl.value" }, 'value'] }
          ]
        }
      }
    };
  }

  calculateIndex(value) {
    const [bag, el, target, source, sibling] = value;
    const children = target.children;
    console.log(value);
    if (sibling === null) {
      return children.length;
    } else {
      return Array.prototype.indexOf.call(children, sibling);
    }
  }

  dropComplete(componentObj, index, value) {
    this.createComponentFunc(componentObj, index, value[2], value);
    //this.openModal();

  }


  openModal() {
    this.modalRef = this.bootstrapService.openModal(this.content, { size: 'lg' });
    this.masterFormService.setModalRef(this.modalRef);
  }

  openFormSettingModal(content) {
    this.bootstrapService.openModal(content, { size: 'lg' });
  }

  generateNewKey() {
    return '_' + Math.random().toString(36).substr(2, 9);
  }

  createComponentFunc(componentObj, index, target, value) {

    const key = this.generateNewKey();
    //console.log('createComponentFunc', 'target', target, 'value', value, 'key', key) ;
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentObj.component);
    this.masterFormService.setCurrentKey(key);

    //console.log('target.id', target.id, 'target.className', target.className);
    let  viewContainerRef;
    const targetClassesArr = target.className.trim().split(" ");

    if ( _.includes(targetClassesArr, 'FSTdropZone')) {
       //console.log("target.className", target.className, targetClassesArr);
      viewContainerRef = this.fieldControlService.getFstCollection(target.id);
      console.log('..................');
    } else if (_.includes(targetClassesArr, 'buttonDropZone')){
      viewContainerRef = this.buttonHost;
    } else {
      viewContainerRef = this.host;
    }

    console.log("viewContainerRef", viewContainerRef, viewContainerRef.length);
    console.log("index",index);
    const componentRef = viewContainerRef.createComponent(componentFactory, index);
    console.log("componentRef", componentRef);
     this.fieldControlService.setFieldRef(componentRef, this, componentObj);
     this.formJsonService.addComponentToMasterJSON(key, componentRef, target, index);
    // target.children[index].generatedKey = key;
    // target.children[index].parentComponent = target.id;
    // this.formJsonService.updateMasterJSON(target);
    // this.formJsonService.buildFinalJSON();
    //console.log(this.formJsonService.getMasterJSON());
  }

  save() {
    this.formBuilderService.postData(this.finalJSON)
      .subscribe((res) => { console.log('resolve data') },
        (err) => { console.log('getting error') });
  }

  reset() {
  }


  preview() {
  }
}
