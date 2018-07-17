import { Component } from '@angular/core';
import { TxtComponent } from '@L3Process/system/modules/formBuilder/components/formElements/txt/txt.component';

@Component({
  selector: 'txa-input',
  templateUrl: './txa.component.html',
  styleUrls: ['./txa.component.css']
})
export class FeTxaComponent extends TxtComponent   {
  showEdit = true;
  properties = {
    type: 'TXA',
    enableCk: true,
    ckSettings: '',
    enableSpellCheck: true,
    rows: 5,
    ...this.properties
  };

  public applicableProperties: any = {
    enableSpellCheck: true,
    enableCk:true,
    ckSettings:true,
    rows: true,
    ...this.applicableProperties
  };

}
