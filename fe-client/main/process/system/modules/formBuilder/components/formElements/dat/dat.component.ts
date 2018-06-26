import { Component, OnInit } from '@angular/core';
import { FeBaseField } from '../baseField/baseField.component';

@Component({
  selector: 'dat-input',
  templateUrl: './dat.component.html',
  styleUrls: ['./dat.component.css', '../baseField/baseField.component.css']
})
export class FeDatComponent extends FeBaseField implements OnInit {
  
  ngOnInit() {
    this.setRef(this.fieldControlService.getFieldRef().ref);
  }

  openModal(){
    this.fieldControlService.getFieldRef().parent.openModal();
  }


}
