import { Component, OnInit } from '@angular/core';
import { FeBaseField } from '../baseField/baseField.component';

@Component({
  selector: 'txa-input',
  templateUrl: './txa.component.html',
  styleUrls: ['./txa.component.css', '../baseField/baseField.component.css']
})
export class FeTxaComponent extends FeBaseField  implements OnInit {

  ngOnInit() {
    this.setRef(this.fieldControlService.getFieldRef().ref);
  }

  openModal() {
    this.fieldControlService.getFieldRef().parent.openModal();
  }


}
