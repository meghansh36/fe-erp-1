import { Component, ViewContainerRef, OnInit } from '@angular/core';
import { FeBaseComponent } from '../feBase.component';

@Component({
  selector: 'fe-text',
  styleUrls: ['feText.component.css'],
  templateUrl: 'feText.component.html'
})
export class FeTextComponent extends FeBaseComponent {
  public style: any;
  public defaultClasses: any;

  ngOnInit() {
  }

  
}
