import { Component, OnInit } from '@angular/core';
import { FeBaseField } from '../baseField/baseField.component';

@Component({
  selector: 'adr-input',
  templateUrl: './adr.component.html',
  styleUrls: ['../baseField/baseField.component.css', './adr.component.css']
})
export class FeAdrComponent extends FeBaseField  implements OnInit {

  ngOnInit() {
    this.setRef(this.fieldControlService.getFieldRef().ref);
  }

  openModal(){
    this.fieldControlService.getFieldRef().parent.openModal();
  }


}
