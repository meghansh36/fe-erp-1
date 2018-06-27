import { Injectable } from '@angular/core';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Injectable()
export class FeFormMasterService {

  modalReference: NgbModalRef;
  properties;
  currentEventType;
  instanceProp;

  constructor() { }

  setModalRef(temp) {
    this.modalReference = temp;
  }
  savedInstance(props) {
    this.instanceProp = props;
  }

  retrieveSelectedComponentProperties() {
    return this.instanceProp;
  }
  getModalRef() {
    return this.modalReference;
  }

  setProperties(props) {
    this.properties = props;
  }

  getProperties() {
    return this.properties;
  }

}
