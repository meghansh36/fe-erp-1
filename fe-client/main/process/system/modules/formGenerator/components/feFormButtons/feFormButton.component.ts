import { Component, Input, OnInit, ElementRef, Renderer2, AfterViewInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FeUtilityService } from '@L1Process/system/modules/formGenerator/services/utility.service';

@Component({
  selector: 'feFormButton',
  styleUrls: ['feFormButton.component.css'],
  templateUrl: 'feFormButton.component.html'
})
export class FeFormButtonComponent implements OnInit, AfterViewInit {

  @Input() buttonConfig: any;
  @Input() group: FormGroup;
  @Input() form: any;

  constructor(public elemRef: ElementRef, public render: Renderer2, public utilityService: FeUtilityService) { }

  get label() {
    return this.buttonConfig.label;
  }

  get id() {
    return this.buttonConfig.id;
  }

  get icon() {
    return this.buttonConfig.icon;
  }

  get events() {
    return this.buttonConfig.events;
  }

  get fieldRef() {
    return document.querySelector(`#${this.id}`);
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.bindEvents();
  }


  bindEvents() {
    try {
      const eventsObjArr: object = this.events;
      if (eventsObjArr) {
        const field = this.fieldRef;
        for (let eventName in eventsObjArr) {
          console.log(field);
          this.render.listen(field, eventName, this.utilityService.fieldEventHandler.bind(this.utilityService, eventName, eventsObjArr[eventName], this.form));
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

}