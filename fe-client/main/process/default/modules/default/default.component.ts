import { Component } from '@angular/core';

@Component({
  selector: 'default-root',
  templateUrl: 'default.component.html',
  styleUrls: ['default.component.css']
})
export class FeDefaultComponent {
  public instance: FeDefaultComponent;
  
  constructor() {
    this.instance = this;
  }
}
