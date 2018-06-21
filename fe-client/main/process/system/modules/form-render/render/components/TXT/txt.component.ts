import { Component, OnInit, Input, Inject, ViewChild, Renderer2 } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ElementDirective } from './directives/element.directive';

@Component({
  selector: 'app-input',
  templateUrl: './txt.component.html',
  styleUrls: ['./txt.component.css'],
  providers: [Inject]
})
export class TXTComponent implements OnInit {
  @ViewChild(ElementDirective) element: ElementDirective;

  @Input() config;
  @Input() group;

  private name: string;
  private label: string;
  private placeholder: string;
  private width: string;
  private height: string;
  private type: string;
  private id: string;
  private elementClass = [];

  constructor(private render: Renderer2, private formBuilder: FormBuilder) { }

  ngOnInit() {
    //getting all the properties of Input component
    let label = this.label = this.config.label;
    this.name = this.config.formcontrol;
    let type = this.config.type;
    let placeholder = this.config.placeholder;
    let width = this.config.width;
    let height = this.config.height;
    let validators = this.config.validators;
    let id = this.config.id;
    this.elementClass = this.config.class;
    //----------------------------------------------------------
    this.element.ElementRef.nativeElement.style.width = width;
    this.element.ElementRef.nativeElement.style.height = height;
    this.element.ElementRef.nativeElement.id = id;
    this.element.ElementRef.nativeElement.type = type;
    if (this.elementClass) {
      this.elementClass.forEach((c) => {
        this.render.addClass(this.element.ElementRef.nativeElement, c);
      });
    }
    this.element.ElementRef.nativeElement.placeholder = placeholder;
  }

}
