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
  properties = {placeholder: 'temp placeholder'};
  ngOnInit() {
    this.setRef(this.fieldControlService.getFieldRef().ref);
    console.log("in ng on init")
  }

  ngDoCheck() {
    const selectedComponentProperties = this.masterFormService.retrieveSelectedComponentProperties();
    if (selectedComponentProperties) {
      console.log("should work")
      this.update(selectedComponentProperties);
  }
}


  openModal() {
    this.fieldControlService.getFieldRef().parent.openModal();
  }

  update(selectedComponentProperties) {
    console.log("in update function of txt component")
    /* this.placeholder = selectedComponentProperties.placeholder;
    this.prefix = selectedComponentProperties.prefix;

    if ( !selectedComponentProperties.hideLabel) {
      this.label = selectedComponentProperties.label;
    } else {
      this.label = '';
    }

    this.suffix = selectedComponentProperties.suffix;
    this.description = selectedComponentProperties.description;
    this.tooltip = selectedComponentProperties.tooltip; */

    this.properties = {
      ...selectedComponentProperties
    };

    console.log(this.properties);

  }

  }

