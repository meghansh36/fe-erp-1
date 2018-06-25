import { Injectable } from '@angular/core';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

export class FeFormMasterService {

  modalReference: NgbModalRef;
  currentEventType;
  instanceProp;

  constructor() { }

  setModalRef(temp) {
    this.modalReference = temp;

  }

  savedInstance(instance) {
    this.instanceProp = instance;
  }

  retrieveInstance() {
    return this.instanceProp;
  }

  getModalRef() {
    return this.modalReference;
  }



}
