import { Component, ViewContainerRef, OnInit } from '@angular/core';
import { FeBaseComponent } from '../feBase.component';

@Component({
  selector: 'fe-text',
  styleUrls: ['feText.component.css'],
  templateUrl: 'feText.component.html'
})
export class FeTextComponent extends FeBaseComponent {

  public defaultClasses: any;
  ngOnInit() {
    super.ngOnInit()
    this.initStyle();
  }

  initStyle() {
    let type = this.config.type;
    let labelPosition = 'top';
    if( this.config.labelPosition ) {
      labelPosition = this.config.labelPosition;
    }
    let classes:any = { 
      fieldWrapperClasses: `field-wrapper ${type}-field-wrapper field-label-${labelPosition}`,
      fieldLableContainerClasses: `field-container field-label-container ${type}-label-containe`,
      fielContainerdClasses: `field-container form-field-container ${type}-container`
    };
    this.defaultClasses = classes;
  }

}
