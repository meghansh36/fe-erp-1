import { Injectable } from '@angular/core';

@Injectable()
export class FeFieldControlService {

  instanceArray: Object[] = [];
  modalParent;
  constructor() { }

  setFieldRef(reference, parent) {
    this.modalParent = parent;
    this.instanceArray.push(reference);
  }

  getFieldRef() {
   return {
     ref: this.instanceArray[this.instanceArray.length - 1],
     parent: this.modalParent
    };
  }
}
