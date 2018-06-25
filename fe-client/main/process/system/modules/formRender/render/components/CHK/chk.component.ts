import { Component, OnInit, Input, Inject, ViewChild, Renderer2 } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { CHKElementDirective } from '@L3Process/system/modules/formRender/render/components/CHK/directives/element.directive';

@Component({
  selector: 'app-check',
  templateUrl: './chk.component.html',
  styleUrls: ['./chk.component.css'],
  providers: [Inject]
})
export class FeCHKComponent implements OnInit {
  @ViewChild(CHKElementDirective) element: CHKElementDirective;

  @Input() config;
  @Input() group;

  private lable: string;
  private name: string;
  private options = [];

  constructor(private render: Renderer2, private formBuilder: FormBuilder) { }

  ngOnInit() {
    //getting all the properties of Input component
    let lable = this.lable = this.config.lable;
    this.name = this.config.formcontrol;
    let validators = this.config.validators;
    let id = this.config.id;
    this.options = this.config.options;
    let elementStyle = [] = this.config.style;
    //----------------------------------------------------------
    this.element.ElementRef.nativeElement.id = id;
    if (elementStyle) {
      elementStyle.forEach((c) => {
        this.render.setStyle(this.element.ElementRef.nativeElement, c.name, c.value);
      });
    }
    this.group.controls[this.name].setValidators([Validators.required]);
  }
  //----------------------------------------------------------

}
