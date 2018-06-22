import { Component, OnInit, Input, Inject, ViewChild, Renderer2 } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { TextAreaElementDirective } from '@L3Process/system/modules/formRender/render/components/TXA/directives/element.directive';

@Component({
  selector: 'app-input',
  templateUrl: './txa.component.html',
  styleUrls: ['./txa.component.css'],
  providers: [Inject]
})
export class FeTXAComponent implements OnInit {
  @ViewChild(TextAreaElementDirective) element: TextAreaElementDirective;

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
    let placeholder = this.config.placeholder;
    let cols = this.config.cols;
    let rows = this.config.rows;
    let validators = this.config.validators;
    let id = this.config.id;
    let elementStyle = [] = this.config.style;
    //----------------------------------------------------------
    if (elementStyle) {
      elementStyle.forEach((c) => {
        this.render.setStyle(this.element.ElementRef.nativeElement, c.name, c.value);
      });
    }
    this.element.ElementRef.nativeElement.cols = cols;
    this.element.ElementRef.nativeElement.rows = rows;
    this.element.ElementRef.nativeElement.placeholder = placeholder;
    this.group.controls[this.name].setValidators([Validators.required, Validators.minLength(20)]);
  }
  //----------------------------------------------------------

}
