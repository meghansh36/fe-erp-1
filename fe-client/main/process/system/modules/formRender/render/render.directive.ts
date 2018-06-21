import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appRender]'
})
export class FeRenderDirective {

  constructor(public ViewContainerRef: ViewContainerRef) { }

}
