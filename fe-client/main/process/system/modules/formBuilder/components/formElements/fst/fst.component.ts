import * as _ from 'lodash';
import { Component, OnInit, ViewChild, DoCheck, Output, EventEmitter, ViewContainerRef } from '@angular/core';
import { FeBaseField } from '../baseField/baseField.component';

@Component({
  selector: 'fst-input.fieldContainerComponent.fieldComponent',
  templateUrl: './fst.component.html',
  styleUrls: ['./fst.component.css', '../baseField/baseField.component.css']
})
export class FeFstComponent extends FeBaseField  implements OnInit, DoCheck {

  @ViewChild('fstContainer', {read: ViewContainerRef}) fstContainer: ViewContainerRef;
  @Output() hostRef = new EventEmitter<ViewContainerRef>();

  showEdit = true;
  properties = {
    label: 'Fieldset',
    description:  '',
    hideLabel: false,
    labelPosition: 'top',
    components: []
};

  applicableProperties = {
    label: true,
    description: true,
    hideLabel: true,
    components: true
  };

  ngOnInit() {
    this.setRef(this.fieldControlService.getFieldRef().ref);
    this.uniqueKey = this.masterFormService.getCurrentKey();
    this.masterFormService.setProperties(this.properties);
    this.fieldControlService.addToFstCollection(this.fstContainer, this.uniqueKey);
  }

  ngDoCheck() {
  //   const propsFromMasterForm = this.masterFormService.getProperties(this.uniqueKey);
  //  // console.log("master form props", propsFromMasterForm);
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
