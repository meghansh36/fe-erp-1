import { Component, OnInit } from '@angular/core';
import { FeBaseField } from '../baseField/baseField.component';

@Component({
  selector: 'mon-input',
  templateUrl: './mon.component.html',
  styleUrls: ['./mon.component.css', '../baseField/baseField.component.css']
})
export class FeMonComponent extends FeBaseField implements OnInit {

  ngOnInit() {
    this.setRef(this.fieldControlService.getFieldRef().ref);
  }

  openModal(){
    this.fieldControlService.getFieldRef().parent.openModal();
  }



}
