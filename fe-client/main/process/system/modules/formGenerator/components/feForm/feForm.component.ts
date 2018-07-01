import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, AbstractControl } from '@angular/forms';

import { FieldConfig } from '../../models/field-config.interface';

@Component({
  exportAs: 'feForm',
  selector: 'feForm',
  styleUrls: ['feForm.component.css'],
  templateUrl: 'feForm.component.html'
})
export class FeFormComponent implements OnChanges, OnInit {
  @Input()
  components: FieldConfig[] = [];
  
  @Input()
  resource: any;

  @Output()
  submit: EventEmitter<any> = new EventEmitter<any>();

  form: FormGroup;
  instance: any;

  get controls() { return this.components.filter(({type}) => type !== 'button'); }
  get changes() { return this.form.valueChanges; }
  get valid() { return this.form.valid; }
  get value() { return this.form.value; }

  constructor(private fb: FormBuilder) {
    this.instance = this;
  }

  ngOnInit() {
    this.form = this.createGroup();
  }

  ngOnChanges() {
    if (this.form) {
      const controls = Object.keys(this.form.controls);
      const configControls = this.controls.map((item) => item.flexiLabel);

      controls
        .filter((control) => !configControls.includes(control))
        .forEach((control) => this.form.removeControl(control));

      configControls
        .filter((control) => !controls.includes(control))
        .forEach((flexiLabel) => {
          const config = this.components.find((control) => control.flexiLabel === flexiLabel);
          this.form.addControl(flexiLabel, this.createControl(config));
        });

    }
  }

  createGroup() {
    const group = this.fb.group({});
    this.controls.forEach(control => group.addControl(control.flexiLabel, this.createControl(control)));
    return group;
  }

  createControl(config: FieldConfig) {
    const { disabled, validation, value } = config;
    return this.fb.control({ disabled, value }, validation);
  }

  handleSubmit(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.submit.emit(this.value);
  }

  setDisabled(flexiLabel: string, disable: boolean) {
    if (this.form.controls[flexiLabel]) {
      const method = disable ? 'disable' : 'enable';
      this.form.controls[flexiLabel][method]();
      return;
    }

    this.components = this.components.map((item) => {
      if (item.flexiLabel === flexiLabel) {
        item.disabled = disable;
      }
      return item;
    });
  }

  setValue(flexiLabel: string, value: any) {
    this.form.controls[flexiLabel].setValue(value, {emitEvent: true});
  }

  asyncCustomPatternValidator(control: AbstractControl): { [key: string]: any } {
    console.log('asyncCustomPatternValidator called of form class' );
    return new Promise(resolve => {
        setTimeout(() => {
            let isValid = /\d/.test( control.value );
            if (!isValid) {
                resolve({ 'customPattern': true });
            } else {
                resolve(null);
            }
        }, 1000);
    });
  }
}
