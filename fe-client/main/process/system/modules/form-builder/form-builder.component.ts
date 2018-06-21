import { Component } from '@angular/core';

@Component({
  selector: 'form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FeFormBuilderComponent {

  basic: String = 'basic';
  advanced: String = 'advanced';
  completeDrop(event) {
    console.log('item dropped', event);
  }
}
