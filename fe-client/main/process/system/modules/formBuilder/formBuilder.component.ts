import { Component, ViewChild, ComponentFactoryResolver, ViewContainerRef, DoCheck, Renderer2, OnInit, AfterViewInit } from '@angular/core';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { NgBootstrapService } from '@L3Process/system/services/NgBootstrap.service';
import { FormMasterService } from '@L3Process/system/modules/formBuilder/services/formMaster.service';
import { FieldControlService } from '@L3Process/system/modules/formBuilder/services/fieldControl.service';
import { FormJsonService } from '@L3Process/system/modules/formBuilder/services/formJson.service';
import { DragulaService } from 'ng2-dragula';
import { FormBuilderService } from '@L3Process/system/modules/formBuilder/services/formBuilder.service';
import { FstComponent } from '@L3Process/system/modules/formBuilder/components/formElements/fst/fst.component';
import * as _ from 'lodash';
import { MasterFormComponent } from '@L3Process/system/modules/formBuilder/components/Master/masterForm.component';
import { reject } from 'q';

// import { FieldRenderDirective } from '@L3Process/system/modules/formBuilder/directives/fieldRender.directive';
@Component({
  selector: 'form-builder',
  templateUrl: './formBuilder.component.html',
  styleUrls: ['./formBuilder.component.css']
})
export class FeFormBuilderComponent implements DoCheck, OnInit, AfterViewInit {

  @ViewChild('host', { read: ViewContainerRef }) host: ViewContainerRef;
  @ViewChild('buttonHost', { read: ViewContainerRef }) buttonHost: ViewContainerRef;
  @ViewChild('content') content;
  cond: Boolean = false;
  basic: String = 'basic';
  advanced: String = 'advanced';
  modalRef: any;
  //formSettingModalRef: 
  rootDrop: any;
  component: any;
  finalJSON;
  formJson: any;
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
    private renderer: Renderer2,
  ) {
    this.formJson = this.formJsonService.MasterJSON;
    this.dragulaService.setOptions('bag-one', {
      revertOnSpill: true,
      copy: function (el, source) {
        return source.id === 'not_copy';
      },
      accepts: function (el, target, source, sibling) {
        const targetClassesArr = target.className.trim().split(' ');
        const fieldClassesArr = el.className.trim().split(' ');
        if (_.includes(targetClassesArr, 'buttonDropZone') &&
          (_.includes(fieldClassesArr, 'button') || _.includes(fieldClassesArr, 'button-input'))) {
          return true;
        } else if (_.includes(targetClassesArr, 'FSTdropZone') || _.includes(targetClassesArr, 'customDropZone')) {
          return true;
        }
      }
    });

    this.dragulaService.drop.subscribe((value) => {
      if (this.rootDrop === undefined) {
        this.rootDrop = value[2];
      }
      if (value[1].nodeName === 'LI') {
        const componentName = value[1].attributes.getNamedItem('componentName').nodeValue;
        console.log("componentName", componentName);
        const index = this.calculateIndex(value);
        value[1].remove();
        this.dropComplete(this.formBuilderService.getComponent(componentName), index, value);
      } else {
        const newIndex = this.calculateIndex(value);
        value[1].parentComponent = value[2].id;
        this.formJsonService.updateMasterJSONOnMove(value[2], value[3], value[1], newIndex);
        this.formJsonService.buildFinalJSON();
      }
    });
  }

  ngDoCheck() {
    this.formJsonService.buildFinalJSON();
    this.finalJSON = this.formJsonService.getFinalJSON();
  }

  onHidden() {
    this.hideFields(this.hidden);
  }

  onDisabled() {
    this.disableFields(this.disabled);
  }

  ngOnInit() {
    this.init();
  }

  ngAfterViewInit() {
    this.applyDisplayProps();
  }

  update(event) {
  }

  init() {
    this.jsonEditorConfig = {
      mode: 'code', onChange: this.update
    };
    this.initFormJsonHelp();
    //this.applyDisplayProps();
  }



  applyDisplayProps() {
    this.disableFields(this.disabled);
    this.hideFields(this.hidden);
  }

  disableFields(disableFlag) {
    const fieldComponents = this.components;
    for (let keyRef in fieldComponents) {
      const componentInstance = fieldComponents[keyRef].instance;
      componentInstance.formDisabled = disableFlag;
    }
  }

  hideFields(hiddenFlag) {
    const fieldComponents = this.components;
    for (let keyRef in fieldComponents) {
      const componentInstance = fieldComponents[keyRef].instance;
      componentInstance.formHidden = hiddenFlag;
    }
  }

  initFormJsonHelp() {
    this.formJsonHelp = {
      show: {
        'simple': {
          "show": true,
          "when": "field-flexilabel",
          "value": 'rathor',
          "operator": '=='
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
      },
      disable: {
        'simple': {
          "disable": true,
          "when": "field-flexilabel",
          "value": 'rathor',
          "operator": '=='
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
      }
    };
  }

  calculateIndex(value) {
    const [bag, el, target, source, sibling] = value;
    const children = target.children;
    console.log(value);
    if (sibling === null) {
      return children.length - 1;
    } else {
      return Array.prototype.indexOf.call(children, sibling) - 1;
    }
  }

  dropComplete(componentObj, index, value) {
    this.createComponentFunc(componentObj, index, value[2], value);
    this.openModal();
  }

  openModal() {
    console.log(this.content);
    this.modalRef = this.bootstrapService.openModal(this.content, { size: 'lg' });
    this.masterFormService.setModalRef(this.modalRef);
  }

  openFormSettingModal(content) {
    this.bootstrapService.openModal(content, { size: 'lg' });
  }

  generateNewKey() {
    return '_' + Math.random().toString(36).substr(2, 9);
  }

  moveDOMNode(parent, nextSibling, el) {
    console.log(parent);
    parent.insertBefore(el, nextSibling);
  }

  createComponentFunc(componentObj, index, target, value) {

    const key = this.generateNewKey();
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentObj.component);
    this.masterFormService.setCurrentKey(key);
    let viewContainerRef;
    const targetClassesArr = target.className.trim().split(" ");
    if (_.includes(targetClassesArr, 'FSTdropZone')) {
      viewContainerRef = this.fieldControlService.getFstCollection(target.id);
      console.log('..................');
    } else if (_.includes(targetClassesArr, 'buttonDropZone')) {
      viewContainerRef = this.buttonHost;
    } else {
      viewContainerRef = this.host;
    }

    const componentRef = viewContainerRef.createComponent(componentFactory);
    this.moveDOMNode(target, value[4], componentRef.location.nativeElement);
    this.fieldControlService.setFieldRef(componentRef, this, componentObj);
    this.formJsonService.addComponentToMasterJSON(key, componentRef, target.id, index);
    target.children[index].generatedKey = key;
    target.children[index].parentComponent = target.id;
    this.formJsonService.updateMasterJSONOnDrop(target, key, false);
    this.formJsonService.buildFinalJSON();
    //console.log(this.formJsonService.getMasterJSON());
  }

  createComponentsFromJSON(componentProps) {
    return new Promise((res, rej) => {
      const copy = _.assign({}, componentProps);
      const key = componentProps.key;
      this.masterFormService.setCurrentKey(key);
      const parentID = componentProps.parent;
      let viewContainerRef;
      if (parentID === 'root_drop') {
        viewContainerRef = this.host;
      } else if (parentID === 'button_drop') {
        viewContainerRef = this.buttonHost;
      } else {
        viewContainerRef = this.fieldControlService.getFstCollection(parentID);
      }
      const component = this.formBuilderService.getComponent(componentProps.componentName).component;

      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);

      const componentRef = viewContainerRef.createComponent(componentFactory);
      componentRef.instance.properties = copy;
      this.fieldControlService.setFieldRef(componentRef, this, { component });
      this.formJsonService.addComponentToMasterJSON(key, componentRef, componentProps.parent, componentProps.order);
      const target: any = document.querySelector(`#${componentProps.parent}`);
      console.log('target', target);
      target.children[componentProps.order].generatedKey = key;
      target.children[componentProps.order].parentComponent = target.id;
      setTimeout(() => {
        res();
      }, 10);
    });
  }

  async populateFormBuilder(components) {
    for (let i = 0; i < components.length; i++) {
      if (components[i].components === undefined) {
        await this.createComponentsFromJSON(components[i]);
      } else {
        await this.createComponentsFromJSON(components[i]);
        this.populateFormBuilder(components[i].components);
      }
    }
    return;
  }


  runBuilder() {
    this.host.clear();
    this.buttonHost.clear();

    const json = {
      "id": "",
      "code": "",
      "formLabel": "",
      "name": "",
      "display": "",
      "disabled": false,
      "hidden": false,
      "conditionalHidden": "",
      "conditionalDisabled": "",
      "active": true,
      "help": "",
      "components": [
        {
          "type": "FST",
          "label": "Fieldset",
          "description": "",
          "hideLabel": false,
          "labelPosition": "top",
          "flexiLabel": "",
          "active": true,
          "components": [
            {
              "type": "EML",
              "hideLabel": false,
              "labelPosition": "top",
              "marginTop": "",
              "marginRight": "",
              "marginLeft": "",
              "marginBottom": "",
              "defaultValueType": "none",
              "defaultValueSqlQuery": "",
              "defaultValueString": "",
              "lovType": "none",
              "lovSqlQuery": "",
              "lovJson": "",
              "nonPersistent": false,
              "hidden": false,
              "clearWhenHidden": false,
              "disabled": false,
              "prefix": "",
              "suffix": "",
              "validations": "",
              "customFuncValidationVal": "",
              "jsonLogicVal": "",
              "formClassValidationVal": "",
              "events": "",
              "condition": "",
              "fldDisabledCondition": "",
              "active": true,
              "required": false,
              "labelWidth": "",
              "labelMargin": "",
              "width": "",
              "mask": [],
              "description": "",
              "icon": "",
              "key": "_lupweaoyx",
              "order": 0,
              "parent": "_qatfbfy2t",
              "componentName": "EmlComponent"
            },
            {
              "type": "FST",
              "label": "Fieldset",
              "description": "",
              "hideLabel": false,
              "labelPosition": "top",
              "flexiLabel": "",
              "active": true,
              "components": [
                {
                  "type": "ADR",
                  "allowMultipleAddress": false,
                  "hideLabel": false,
                  "labelPosition": "top",
                  "marginTop": "",
                  "marginRight": "",
                  "marginLeft": "",
                  "marginBottom": "",
                  "defaultValueType": "none",
                  "defaultValueSqlQuery": "",
                  "defaultValueString": "",
                  "lovType": "none",
                  "lovSqlQuery": "",
                  "lovJson": "",
                  "nonPersistent": false,
                  "hidden": false,
                  "clearWhenHidden": false,
                  "disabled": false,
                  "prefix": "",
                  "suffix": "",
                  "validations": "",
                  "customFuncValidationVal": "",
                  "jsonLogicVal": "",
                  "formClassValidationVal": "",
                  "events": "",
                  "condition": "",
                  "fldDisabledCondition": "",
                  "active": true,
                  "required": false,
                  "labelWidth": "",
                  "labelMargin": "",
                  "width": "",
                  "mask": [],
                  "description": "",
                  "icon": "",
                  "key": "_ysk4oqc8p",
                  "order": 0,
                  "parent": "_iqv2xuie7",
                  "componentName": "AdrComponent"
                }
              ],
              "key": "_iqv2xuie7",
              "order": 1,
              "parent": "_qatfbfy2t",
              "componentName": "FstComponent"
            }
          ],
          "key": "_qatfbfy2t",
          "order": 0,
          "parent": "root_drop",
          "componentName": "FstComponent"
        }
      ],
      "buttons": []
    };
    this.populateFormBuilder(json.components);
    console.log(this.formJsonService.getMasterJSON());
    this.formJsonService.buildFinalJSON();
  }

  save() {
    this.formBuilderService.postData(this.finalJSON)
      .subscribe((res) => { alert('data received') },
        (err) => { console.log('getting error', err) });
  }

  reset() {
  }


  preview() {
  }

  get id() {
    return this.formJson.id;
  }

  get code() {
    return this.formJson.code;
  }

  get formLabel() {
    return this.formJson.formLabel;
  }

  get name() {
    return this.formJson.name;
  }

  get display() {
    return this.formJson.display;
  }

  get disabled() {
    return this.formJson.disabled;
  }

  get hidden() {
    return this.formJson.hidden;
  }

  get conditionalHidden() {
    return this.formJson.conditionalHidden;
  }

  get conditionalDisabled() {
    return this.formJson.conditionalDisabled;
  }

  get active() {
    return this.formJson.active;
  }

  get help() {
    return this.formJson.help;
  }

  get components() {
    return this.formJson.components;
  }

  set id(id) {
    this.formJson.id = id;
  }

  set code(code) {
    this.formJson.code = code;
  }

  set formLabel(formLabel) {
    this.formJson.formLabel = formLabel;
  }

  set name(name) {
    this.formJson.name = name;
  }

  set display(display) {
    this.formJson.display = display;
  }

  set disabled(disabled) {
    this.formJson.disabled = disabled;
  }

  set hidden(hidden) {
    this.formJson.hidden = hidden;
  }

  set conditionalHidden(conditionalHidden) {
    this.formJson.conditionalHidden = conditionalHidden;
  }

  set conditionalDisabled(conditionalDisabled) {
    this.formJson.conditionalDisabled = conditionalDisabled;
  }

  set active(active) {
    this.formJson.active = active;
  }

  set help(help) {
    this.formJson.help = help;
  }

  set components(components) {
    this.formJson.components = components;
  }
}
