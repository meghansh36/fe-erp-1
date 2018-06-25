import { Injectable } from '@angular/core';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

export class FeFormMasterService {

  modalReference: NgbModalRef;
  display: Boolean;
  constructor() { }


  setModalRef(temp) {
    this.modalReference = temp;
  }

  getModalRef() {
    return this.modalReference;
  }

}
