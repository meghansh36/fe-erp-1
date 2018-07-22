import { Component, OnInit } from '@angular/core';
import { TextComponent } from '@L3Process/system/modules/formGenerator/components/Text/Text.component';

@Component({
  selector: 'fe-password',
  styleUrls: ['fePassword.component.css'],
  templateUrl: 'fePassword.component.html',
  host: {
    '(keypress)': '_onKeypress($event)',
  }
})
export class FeAddressComponent extends TextComponent {

 
}