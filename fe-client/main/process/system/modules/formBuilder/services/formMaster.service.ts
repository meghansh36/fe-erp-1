import { Injectable } from '@angular/core';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

export class FeFormMasterService {

  modalReference: NgbModalRef;
  currentEventType;

  constructor() { }

  setModalRef(temp) {
    this.modalReference = temp;

  }

  getModalRef() {
    return this.modalReference;
  }



}
