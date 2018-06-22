import { Component, OnInit, Input, Inject, ViewChild, Renderer2 } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { DATElementDirective } from '@L3Process/system/modules/formRender/render/components/DAT/directives/element.directive';

@Component({
  selector: 'app-input',
  templateUrl: './dat.component.html',
  styleUrls: ['./dat.component.css'],
  providers: [Inject]
})
export class FeDATComponent implements OnInit {
  @ViewChild(DATElementDirective) element: DATElementDirective;

  @Input() config;
  @Input() group;

  private lable: string;
  private name: string;

  constructor(private render: Renderer2, private formBuilder: FormBuilder) { }

  ngOnInit() {
    //getting all the properties of Input component
    let lable = this.lable = this.config.lable;
    this.name = this.config.formcontrol;
    let validators = this.config.validators;
    let id = this.config.id;
    let elementStyle = [] = this.config.style;
    let type = this.config.type;
    //----------------------------------------------------------
    this.group.controls[this.name].setValidators([Validators.required]);
  /*  this.element.ElementRef.nativeElement.type = type;

    if (elementStyle) {
      elementStyle.forEach((c) => {
        this.render.setStyle(this.element.ElementRef.nativeElement, c.name, c.value);
      });
    }
    this.group.controls[this.name].setValidators([Validators.required]);
  }*/
  //----------------------------------------------------------

}
}
