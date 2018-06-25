import { Injectable } from '@angular/core';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

export class FeFormMasterService {

  modalReference: NgbModalRef;
  currentEventType;

  constructor() { }

  setModalRef(temp,event) {
    this.modalReference = temp;
    this.currentEventType = event;
  }

  getModalRef() {
    return this.modalReference;
  }

  getCurrentEvent(){
    return this.currentEventType;
  }

}
