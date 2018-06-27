import { Component, OnInit, ViewChild, DoCheck } from '@angular/core';
import { FeBaseField } from '../baseField/baseField.component';

@Component({
  selector: 'txt-input',
  templateUrl: './txt.component.html',
  styleUrls: ['./txt.component.css', '../baseField/baseField.component.css']
})
export class FeTxtComponent extends FeBaseField  implements OnInit, DoCheck {
  /* placeholder = '';
  showEdit:boolean=false;
  label = 'text';
  prefix ;
  suffix;
  tooltip;
  description; */
<<<<<<< HEAD
  properties = {placeholder: 'temp placeholder'};
=======
  showEdit = true;
  name = 'xyz';
  properties: {};
>>>>>>> fc744462464a5970e3193edf689fe4d45e3d29ee
  ngOnInit() {
    this.properties = {
      label: 'test',
      prefix: '',
      suffix: '',
      description: '',
      placeholder: 'test',
      tooltip: ''
    };
    this.setRef(this.fieldControlService.getFieldRef().ref);
  }

  ngDoCheck() {
    const propsFromMasterForm = this.masterFormService.retrieveSelectedComponentProperties();
    if (propsFromMasterForm) {
      this.update(propsFromMasterForm);
  }
}


  openModal() {
    this.fieldControlService.getFieldRef().parent.openModal();
  }

  update(propsFromMasterForm) {

    this.properties = {
      ...propsFromMasterForm
    };
  }

  }

