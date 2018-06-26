import { Component, OnInit } from '@angular/core';
import { FeBaseField } from '../baseField/baseField.component';

@Component({
  selector: 'dti-input',
  templateUrl: './dti.component.html',
  styleUrls: ['./dti.component.css', '../baseField/baseField.component.css']
})
export class FeDtiComponent extends FeBaseField implements OnInit {
  
  ngOnInit() {
    this.setRef(this.fieldControlService.getFieldRef().ref);
  }

  openModal(){
    this.fieldControlService.getFieldRef().parent.openModal();
  }

  
}
