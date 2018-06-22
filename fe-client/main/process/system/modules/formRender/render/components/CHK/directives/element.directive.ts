import { Directive, ViewContainerRef, ElementRef, Attribute} from '@angular/core';

@Directive({
  selector: '[appCheckboxElement]'
})
export class FeCheckboxElementDirective {

  constructor(public ViewContainerRef: ViewContainerRef, public ElementRef: ElementRef, @Attribute('attribute') public param:String) { }

}
