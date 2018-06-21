import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appRender]'
})
export class RenderDirective {

  constructor(public ViewContainerRef: ViewContainerRef) { }

}
