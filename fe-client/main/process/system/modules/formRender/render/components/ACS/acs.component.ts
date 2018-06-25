import { Component, OnInit, Input, Inject, ViewChild, Renderer2, ViewContainerRef, ElementRef } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ACSElementDirective } from '@L3Process/system/modules/formRender/render/components/ACS/directives/element.directive';

@Component({
  selector: 'app-auto',
  templateUrl: './acs.component.html',
  styleUrls: ['./acs.component.css'],
  providers: [Inject]
})
export class FeACSComponent implements OnInit {
  @ViewChild(ACSElementDirective) element: ACSElementDirective;
  @ViewChild('block') block: ElementRef;

  @Input() config;
  @Input() group;

  private name: string;
  private lable: string;
  private country: string;
  private countries = [
    'India', 'Sydney', 'Canada', 'Germany', 'Poland', 'England', 'France'
  ];
  private searched = [];

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
    //----------------------------------------------------------
  }

  search() {
    var reg = new RegExp(this.country.split('').join('\\w*').replace(/\W/, ""), 'i');
    if (this.country != '') {
      this.searched = this.countries.filter(function (count) {
        if (count.match(reg)) {
          return count;
        }
      });
      if (this.searched.length > 0) {
        this.render.setStyle(this.block.nativeElement, 'display', 'block');
      }
    }
    else {
      this.searched = [];
      this.render.setStyle(this.block.nativeElement, 'display', 'none');
    }
  }

  selectInp(event: MouseEvent) {
    //this.country = event.target.innerHTML.trim();
   // this.country = event.target.innerHTML.trim();
    this.searched = [];
  }

}
