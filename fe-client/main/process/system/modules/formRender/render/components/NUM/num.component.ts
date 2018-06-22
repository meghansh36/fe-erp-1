import { Component, OnInit, Input, Inject, ViewChild, Renderer2 } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { NUMElementDirective } from '@L3Process/system/modules/formRender/render/components/NUM/directives/element.directive';

@Component({
  selector: 'app-input',
  templateUrl: './num.component.html',
  styleUrls: ['./num.component.css'],
  providers: [Inject]
})
export class FeNUMComponent implements OnInit {
  @ViewChild(NUMElementDirective) element: NUMElementDirective;

  @Input() config;
  @Input() group;

  private lable: string;
  private name: string;
  private options = [];
  private maxlength: number;
  private restrict: any;

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
    let length = this.maxlength = this.config.maxlength;
    this.maxlength = this.maxlength-1;
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
    this.group.controls[this.name].setValidators([Validators.required]);
  }

  checkLength() {
    if (this.element.ElementRef.nativeElement.value.length >= this.maxlength) {
      this.element.ElementRef.nativeElement.value = this.element.ElementRef.nativeElement.value.slice(0,this.maxlength);
    }
  }

}
