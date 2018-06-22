import { Component, OnInit, Input, Inject, ViewChild, Renderer2 } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ElementDirective } from '@L3Process/system/modules/formRender/render/components/CHK/directives/element.directive';

@Component({
  selector: 'app-checkbox',
  templateUrl: './chk.component.html',
  styleUrls: ['./chk.component.css'],
  providers: [Inject]
})
export class FeCHKComponent implements OnInit {
  @ViewChild(ElementDirective) element: ElementDirective;

  @Input() config;
  @Input() group;

  private name: string;
  private lable: string;
  private placeholder: string;
  private width: string;
  private height: string;
  private type: string;
  private id: string;

  constructor(private render: Renderer2, private formBuilder: FormBuilder) { }

  ngOnInit() {
    //getting all the properties of Input component
    let lable = this.lable = this.config.lable;
    this.name = this.config.formcontrol;
    let type = this.config.type;
    let placeholder = this.config.placeholder;
    let width = this.config.width;
    let height = this.config.height;
    let validators = this.config.validators;
    let id = this.config.id;
    let elementStyle = [] = this.config.style;
    //----------------------------------------------------------
    this.element.ElementRef.nativeElement.style.width = width;
    this.element.ElementRef.nativeElement.style.height = height;
    this.element.ElementRef.nativeElement.id = id;
    this.element.ElementRef.nativeElement.type = type;
    if (elementStyle) {
      elementStyle.forEach((c) => {
        this.render.setStyle(this.element.ElementRef.nativeElement, c.name, c.value);
      });
    }
    this.element.ElementRef.nativeElement.placeholder = placeholder;
    this.group.controls[this.name].setValidators([Validators.required, Validators.minLength(8)]);
  }
  //----------------------------------------------------------

}
