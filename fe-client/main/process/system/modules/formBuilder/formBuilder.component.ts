import { Component } from '@angular/core';

@Component({
  selector: 'form-builder',
  templateUrl: './formBuilder.component.html',
  styleUrls: ['./formBuilder.component.css']
})
export class FeFormBuilderComponent {

  basic: String = 'basic';
  advanced: String = 'advanced';
  completeDrop(event) {
    console.log('item dropped', event);
  }
}
