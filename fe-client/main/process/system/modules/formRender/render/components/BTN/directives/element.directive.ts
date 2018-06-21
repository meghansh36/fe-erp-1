import { Directive, ViewContainerRef,ElementRef,Attribute } from '@angular/core';

@Directive({
  selector: '[appElement]'
})
export class FeElementDirective {

  constructor(public ViewContainerRef: ViewContainerRef,public ElementRef: ElementRef,@Attribute('attribute') public param:String) { }

}
