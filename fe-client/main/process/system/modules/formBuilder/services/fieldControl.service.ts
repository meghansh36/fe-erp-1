import { Injectable } from '@angular/core';

@Injectable()
export class FeFieldControlService {

  instanceArray: Object[] = [];
  modalParent;
  component;
  constructor() { }

  setFieldRef(reference, parent, component) {
    this.modalParent = parent;
    this.instanceArray.push(reference);
    this.component = component;
  }

  getFieldRef() {
   return {
     ref: this.instanceArray[this.instanceArray.length - 1],
     parent: this.modalParent,
     component: this.component
    };
  }
}
