import { Component } from '@angular/core';
import { FeBaseField } from '../baseField/baseField.component';

@Component({
  selector: 'txa-input',
  templateUrl: './txa.component.html',
  styleUrls: ['./txa.component.css', '../baseField/baseField.component.css']
})
export class FeTxaComponent extends FeBaseField   {
  showEdit = true;
  properties = {
    type: 'TXA',
    enableCk: true,
    ckSettings: '',
    enableSpellCheck: true,
    rows: 5,
    ...this.properties
  };

  applicableProperties={
    enableSpellCheck: true,
    enableCk:true,
    ckSettings:true,
    rows: true,
    ...this.applicableProperties
  }

}
