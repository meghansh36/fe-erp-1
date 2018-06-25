import { Component, OnInit, ViewChild, DoCheck } from '@angular/core';
import { FeBaseField } from '../baseField/baseField.component';
import { FieldControlService } from '@L3Process/system/modules/formBuilder/services/fieldControl.service';
import { FormMasterService } from '@L3Process/system/modules/formBuilder/services/formMaster.service';

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
  constructor(private fieldControlService: FieldControlService, private masterFormService: FormMasterService) {
    super();
  }
  ngOnInit() {
    this.setRef(this.fieldControlService.getFieldRef().ref);
  }

  ngDoCheck() {
    const instance = this.masterFormService.retrieveInstance();
    if(instance){
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
