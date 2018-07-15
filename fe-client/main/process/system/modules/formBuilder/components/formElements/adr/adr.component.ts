import { Component, OnInit, DoCheck } from '@angular/core';
import { FeBaseField } from '../baseField/baseField.component';
import * as _ from 'lodash';
@Component({
  selector: 'adr-input',
  templateUrl: './adr.component.html',
  styleUrls: ['../baseField/baseField.component.css', './adr.component.css']
})
export class FeAdrComponent extends FeBaseField  implements OnInit, DoCheck {

  showEdit = true;
  properties = {
    allowMultipleAddress: false,
  ...this.properties    
};

  

  applicableProperties=
  {
    allowMultipleAddress: true,
    ...this.applicableProperties


}

  ngOnInit() {
    console.log("initialized a new instance", this.properties);
    this.setRef(this.fieldControlService.getFieldRef().ref);
    this.uniqueKey = this.masterFormService.getCurrentKey();
    console.log(this.uniqueKey);
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
