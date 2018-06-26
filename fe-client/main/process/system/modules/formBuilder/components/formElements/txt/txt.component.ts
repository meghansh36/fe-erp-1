import { Component, OnInit, ViewChild, DoCheck } from '@angular/core';
import { FeBaseField } from '../baseField/baseField.component';

@Component({
  selector: 'txt-input',
  templateUrl: './txt.component.html',
  styleUrls: ['./txt.component.css', '../baseField/baseField.component.css']
})
export class FeTxtComponent extends FeBaseField  implements OnInit, DoCheck {
  placeholder = '';
  label = 'text';
  prefix ;
  suffix;
  tooltip;
  description;
  
  ngOnInit() {
    this.setRef(this.fieldControlService.getFieldRef().ref);
  }

  ngDoCheck() {
    const instance = this.masterFormService.retrieveInstance();
    if (instance) {
      this.update(instance);
  }
}


  openModal() {
    this.fieldControlService.getFieldRef().parent.openModal();
  }

  update(instance) {

    this.placeholder = instance.placeholder;
    this.prefix = instance.prefix;

    if ( !instance.hideLabel) {
      this.label = instance.label;
    } else {
      this.label = '';
    }

    this.suffix = instance.suffix;
    this.description = instance.description;
    this.tooltip = instance.tooltip;

  }

  }

