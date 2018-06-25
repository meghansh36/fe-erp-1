import { Directive, ViewContainerRef,ElementRef,Attribute } from '@angular/core';

@Directive({
  selector: '[appSelectElement]'
})
export class FeMulSelectElementDirective {

  constructor(public ViewContainerRef: ViewContainerRef,public ElementRef: ElementRef,@Attribute('attribute') public param:String) { }

}
