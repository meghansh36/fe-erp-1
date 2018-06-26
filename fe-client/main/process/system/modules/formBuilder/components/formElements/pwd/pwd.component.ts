import { Component, OnInit } from '@angular/core';
import { FeBaseField } from '../baseField/baseField.component';
@Component({
  selector: 'pwd-input',
  templateUrl: './pwd.component.html',
  styleUrls: ['./pwd.component.css', '../baseField/baseField.component.css']
})
export class FePwdComponent extends FeBaseField implements OnInit {

  ngOnInit() {
    this.setRef(this.fieldControlService.getFieldRef().ref);
  }

  openModal() {
    this.fieldControlService.getFieldRef().parent.openModal();
  }



}
