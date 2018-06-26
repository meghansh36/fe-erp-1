import { Component, OnInit } from '@angular/core';
import { FeBaseField } from '../baseField/baseField.component';

@Component({
  selector: 'shopclues-eml',
  templateUrl: './eml.component.html',
  styleUrls: ['./eml.component.css', '../baseField/baseField.component.css']
})
export class FeEmlComponent extends FeBaseField implements OnInit {
  ngOnInit() {
    this.setRef(this.fieldControlService.getFieldRef().ref);
  }

  openModal(){
    this.fieldControlService.getFieldRef().parent.openModal();
  }



}
