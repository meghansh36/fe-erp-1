import { Component } from '@angular/core';

@Component({
  selector: 'default-root',
  templateUrl: 'default.component.html',
  styleUrls: ['default.component.css']
})
export class FeDefaultComponent {
  public instance: any;
  
  constructor() {
    this.instance = this;
  }

  onUserNameChange( arg1, arg2 ) {
    console.log("called onUserNameChage of  default component",  arg1, arg2 );
  }

}
``