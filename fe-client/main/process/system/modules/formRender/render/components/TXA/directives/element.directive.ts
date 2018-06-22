import { Directive, ViewContainerRef,ElementRef,Attribute } from '@angular/core';

@Directive({
  selector: '[appTextAreaElement]'
})
export class FeTextAreaElementDirective {

  constructor(public ViewContainerRef: ViewContainerRef,public ElementRef: ElementRef,@Attribute('attribute') public param:String) { }

}
