import { Component, OnInit, Input, Inject, ViewChild, Renderer2 } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ElementDirective } from './directives/element.directive';

@Component({
  selector: 'app-input',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.css'],
  providers: [Inject]
})
export class BTNComponent implements OnInit {
  @ViewChild(ElementDirective) element: ElementDirective;

  @Input() config;
  @Input() group;

  private width: string;
  private formcontrol: string;
  private height: string;
  private type: string;
  private id: string;
  private value: string;
  private elementClass = [];

  constructor(private render: Renderer2, private formBuilder: FormBuilder) { }

  ngOnInit() {
    //getting all the properties of Input component
    let value = this.value = this.config.value;
    let width = this.config.width;
    let height = this.config.height;
    let validators = this.config.validators;
    let id = this.config.id;
    this.elementClass = this.config.class;
    //----------------------------------------------------------
    this.element.ElementRef.nativeElement.style.width = width;
    this.element.ElementRef.nativeElement.style.height = height;
    this.element.ElementRef.nativeElement.id = id;
    this.render.setAttribute(this.element.ElementRef.nativeElement, 'value',value);
    console.log(value);
    if (this.elementClass) {
      this.elementClass.forEach((c) => {
        this.render.addClass(this.element.ElementRef.nativeElement, c);
      });
    }
  }

}
