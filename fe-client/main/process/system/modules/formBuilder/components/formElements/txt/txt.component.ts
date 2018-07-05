import * as _ from 'lodash';
import { Component, OnInit, ViewChild, DoCheck } from '@angular/core';
import { FeBaseField } from '../baseField/baseField.component';


@Component({
  selector: 'txt-input.fieldComponent',
  templateUrl: './txt.component.html',
  styleUrls: ['./txt.component.css', '../baseField/baseField.component.css']
})
export class FeTxtComponent extends FeBaseField  implements OnInit, DoCheck {
  showEdit = true;
  properties = {
  label: 'test',
  prefix:undefined,
  suffix:undefined,
  description: '',
  placeholder: 'test',
  tooltip:undefined,
  labelPosition:'top',
  labelMargin:10,
  width:100,
};

  applicableProperties={
    placeholder:true,
    description:true,
    inputMask:true,
    prefix:true,
    suffix:true,
    clearValue:true,
    hidden:true,
    disabled:true,
    appliedValidation:true,
    minimumLength:true,
    maximumLength:true,
    regularExpression:true,
    customErrorMessage:true,
    customValidationFunction:true,
    customJsonLogic:true,
    customFunction:true,
    jsonLogic:true,
    ...this.applicableProperties



}

  ngOnInit() {


    console.log("initialized a new instance", this.properties);
    this.setRef(this.fieldControlService.getFieldRef().ref);
    this.uniqueKey = this.masterFormService.getCurrentKey();
    // this.masterFormService.setCurrentKey(this.uniqueKey);
    this.masterFormService.setProperties(this.properties);
    // this.applicableProperties={
    //   ...this.textApplicableProperties,
    //   ...this.applicableProperties
    // }
  }

  ngDoCheck() {

}

  openModal() {
    this.masterFormService.setCurrentKey(this.uniqueKey);
    this.masterFormService.setProperties(this.properties);
    this.fieldControlService.getFieldRef().parent.openModal();
  }

  update(propsFromMasterForm) {
    this.properties = _.assignIn({}, propsFromMasterForm);
  }
}
