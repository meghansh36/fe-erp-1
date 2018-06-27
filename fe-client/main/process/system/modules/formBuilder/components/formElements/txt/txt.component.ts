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
  showEdit = true;
  name = 'xyz';
  properties: {};
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
<<<<<<< HEAD
    console.log("in ng on init")
    console.log("this is ",this.properties);
  }

  ngDoCheck() {
    const selectedComponentProperties = this.masterFormService.retrieveSelectedComponentProperties();
    if (selectedComponentProperties) {
     console.log("should work")
      this.update(selectedComponentProperties);
=======
  }

  ngDoCheck() {
    const propsFromMasterForm = this.masterFormService.retrieveSelectedComponentProperties();
    if (propsFromMasterForm) {
      this.update(propsFromMasterForm);
>>>>>>> cb45931af7362f783052471ea043893d801d5890
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

