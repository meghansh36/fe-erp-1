import { Component, OnInit } from '@angular/core';
import { FeBaseField } from '../baseField/baseField.component';

@Component({
  selector: 'hid-input',
  templateUrl: './hid.component.html',
  styleUrls: ['./hid.component.css','../baseField/baseField.component.css']
})
export class FeHidComponent extends FeBaseField implements OnInit {
  
  ngOnInit() {
    this.setRef(this.fieldControlService.getFieldRef().ref);
  }

  openModal(){
    this.fieldControlService.getFieldRef().parent.openModal();
  }


}
