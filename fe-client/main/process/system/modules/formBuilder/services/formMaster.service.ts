import { Injectable } from '@angular/core';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import * as _ from 'lodash';
import { FormJsonService } from '@L3Process/system/modules/formBuilder/services/formJson.service';
@Injectable()
export class FeFormMasterService {

  modalReference: NgbModalRef;
  properties;
  currentEventType;
  key;
  Json;

  constructor(private masterJsonService: FormJsonService) { }

  setModalRef(temp) {
    this.modalReference = temp;
  }

  getModalRef() {
    return this.modalReference;
  }

  setProperties(props) {
    const masterJSON = this.masterJsonService.getMasterJSON();
    //console.log("master json", masterJSON);
    console.log(props);
    masterJSON.components[this.key].instance.properties = _.assignIn({}, props);
    this.masterJsonService.setMasterJSON(masterJSON);
  }

  getProperties(key) {
    //console.log(this.properties);
    const masterJSON = this.masterJsonService.getMasterJSON();
    return masterJSON.components[key].instance.properties;
  }

  setCurrentKey(key) {
    this.key = key;
  }

  getCurrentKey() {
   return this.key;
  }




}
