import { Component, OnInit, DoCheck } from '@angular/core';
import { FeBaseField } from '../baseField/baseField.component';
import * as _ from 'lodash';
@Component({
  selector: 'num-input.fieldComponent',
  templateUrl: './num.component.html',
  styleUrls: ['./num.component.css', '../baseField/baseField.component.css']
})
export class FeNumComponent extends FeBaseField implements OnInit, DoCheck {

  showEdit = true;
  properties = {
    minimumValue: undefined,
    maximumValue: undefined,
    useDelimeter: true,
    requiredDecimal: true,
    ...this.properties
};

  applicableProperties = {
    minimumValue: true,
    maximumValue: true,
    useDelimeter: true,
    requiredDecimal: true,
    ...this.applicableProperties
}

  ngOnInit() {

    console.log("initialized a new instance", this.properties);
    this.setRef(this.fieldControlService.getFieldRef().ref);
    this.uniqueKey = this.masterFormService.getCurrentKey();
    console.log(this.uniqueKey);
   // this.masterFormService.setCurrentKey(this.uniqueKey);
    this.masterFormService.setProperties(this.properties);
  }

  ngDoCheck() {
  //   const propsFromMasterForm = this.masterFormService.getProperties(this.uniqueKey);
  //  // console.log("master form props", propsFromMasterForm);
  //   if (propsFromMasterForm) {
  //     this.update(propsFromMasterForm);
  // }
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
