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
  private cols: string;
  private rows: string;
  private width: string;
  private height: string;
  private type: string;
  private id: string;
  private elementStyle = [];

  constructor(private render: Renderer2, private formBuilder: FormBuilder) { }

  ngOnInit() {
    //getting all the properties of Input component
    let lable = this.lable = this.config.lable;
    this.name = this.config.formcontrol;
    let type = this.config.type;
    let placeholder = this.config.placeholder;
    this.cols = this.config.col;
    this.rows = this.config.row;
    let validators = this.config.validators;
    let id = this.config.id;
    this.elementStyle = this.config.style;
    //----------------------------------------------------------
    if (this.elementStyle) {
      this.elementStyle.forEach((c) => {
        this.render.setStyle(this.element.ElementRef.nativeElement, c.name, c.value);
      });
    }
    this.element.ElementRef.nativeElement.placeholder = placeholder;
    this.group.controls[this.name].setValidators([Validators.required, Validators.minLength(20)]);
  }
  //----------------------------------------------------------

}
