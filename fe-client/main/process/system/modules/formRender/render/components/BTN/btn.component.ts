import { Component, OnInit, Input, Inject, ViewChild, Renderer2 } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ButtonElementDirective } from '@L3Process/system/modules/formRender/render/components/BTN/directives/element.directive';

@Component({
  selector: 'app-button',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.css'],
  providers: [Inject]
})
export class FeBTNComponent implements OnInit {
  @ViewChild(ButtonElementDirective) element: ButtonElementDirective;

  @Input() config;
  @Input() group;

  private elementClass = [];

  constructor(private render: Renderer2, private formBuilder: FormBuilder) { }

  ngOnInit() {
    //getting all the properties of Input componen
    let value = this.config.value;
    let width = this.config.width;
    let height = this.config.height;
    let validators = this.config.validators;
    let id = this.config.id;
    let action = this.config.action;
    this.elementClass = this.config.class;
    //----------------------------------------------------------
    if (action) {
      this.render.listen(this.element.ElementRef.nativeElement, 'click', (event) => {
        this.group.valid ? console.log(this.group.value) : console.log("Invalid Form");
      });
    }
    this.element.ElementRef.nativeElement.style.width = width;
    this.element.ElementRef.nativeElement.style.height = height;
    this.element.ElementRef.nativeElement.id = id;
    this.element.ElementRef.nativeElement.innerHTML = value;
    const parent = this.render.parentNode(this.element.ElementRef.nativeElement);
    this.render.setStyle(parent, 'width', '-webkit-fill-available');
    this.render.setStyle(parent, 'display', 'grid');
    if (this.elementClass) {
      this.elementClass.forEach((c) => {
        this.render.addClass(this.element.ElementRef.nativeElement, c);
      });
    }
    //----------------------------------------------------------
  }

}
