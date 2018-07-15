import { Component, OnInit, DoCheck } from '@angular/core';
import { FeBaseField } from '../baseField/baseField.component';
import * as _ from 'lodash';

@Component({
  selector: 'txa-input',
  templateUrl: './txa.component.html',
  styleUrls: ['./txa.component.css', '../baseField/baseField.component.css']
})
export class FeTxaComponent extends FeBaseField  implements OnInit, DoCheck {
  showEdit = true;
  properties = {
    enableCk: true,
    ckSettings: '',
    enableSpellCheck: true,
    rows: 5,
    ...this.properties
  };

  applicableProperties={
    enableSpellCheck: true,
    enableCk:true,
    ckSettings:true,
    rows: true,
    ...this.applicableProperties
}

  ngOnInit() {
    // this.properties = {
    //   label: 'test',
    //   prefix: '',
    //   suffix: '',
    //   description: '',
    //   placeholder: 'test',
    //   tooltip: ''
    // };
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
    this.properties = _.assignIn({},propsFromMasterForm);
  }



}
