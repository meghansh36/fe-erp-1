import { Directive, ViewContainerRef,ElementRef,Attribute } from '@angular/core';

@Directive({
  selector: '[appDATElement]'
})
export class FeDATElementDirective {

  constructor(public ViewContainerRef: ViewContainerRef,public ElementRef: ElementRef,@Attribute('attribute') public param:String) { }

}
