import { Component, EventEmitter, Input, OnChanges, OnInit, Output, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, AbstractControl } from '@angular/forms';
import { FeDependentService } from '@L1Process/system/modules/formGenerator/services/dependent.service';
import { FieldConfig } from '../../models/field-config.interface';

@Component({
  exportAs: 'feForm',
  selector: 'feForm',
  styleUrls: ['feForm.component.css'],
  templateUrl: 'feForm.component.html'
})
export class FeFormComponent implements OnChanges, OnInit, AfterViewInit {
  @Input()
  components: FieldConfig[] = [];
  
  @Input()
  formInstance: any;

  @Output()
  submit: EventEmitter<any> = new EventEmitter<any>();

  form: FormGroup;
  instance: any;
  componentInstances: any;

  get schemaControls() { 
    return this.components.filter(({type}) => type !== 'button'); 
  }
  get changes() { return this.form.valueChanges; }
  get valid() { return this.form.valid; }
  get value() { return this.form.value; }

  constructor(private fb: FormBuilder, private dependent: FeDependentService) {
    this.instance = this;
    this.componentInstances = [];
  }

  ngOnInit() {
    this.form = this.createGroup();
  }

  ngOnChanges() {
    if (this.form) {
      const controls = Object.keys(this.controls);
      const configControls = this.schemaControls.map((item) => item.flexiLabel);

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

  ngAfterViewInit() {
    this.setDefaultValue();
  }

  createGroup() {
    const group = this.fb.group({});
    this.schemaControls.forEach(control => group.addControl(control.flexiLabel, this.createControl(control)));
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

  getDependentData(flexilabel, value) {
    let data: any = this.dependent.dependentData(flexilabel, value);
    data.forEach((ele) => {
        if (ele.fieldType == 'SEL' || ele.fieldType == 'MSL' ) {
            this.instance.componentInstances[ele.flexiLabel].options = ele.data;
        }
        else {
            this.instance.componentInstances[ele.flexiLabel].value = ele.data ;
        }
    })
  }

  setFieldOptions( flexiLabel: string, options: any ) {
    let control = this.getControl( flexiLabel );
    if ( control ) {
      let fldCompObj = this.componentInstances[ flexiLabel ];
      fldCompObj.options = options;
    }
  }

  setDisabled(flexiLabel: string, disable: boolean) {
    if (this.getControl(flexiLabel)) {
      const method = disable ? 'disable' : 'enable';
      this.getControl(flexiLabel)[method]();
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
    let control: AbstractControl = this.getControl(flexiLabel);
    if ( control ) {
      control.setValue(value, {emitEvent: true, onlySelf: true});
    } else {
      console.log(`Can not set value of undefined control ${flexiLabel}.`);
    }
    
  }

  setDefaultValue() {
    this.components.forEach( ( componentConfig ) => {
      let flexiLabel: string = componentConfig.flexiLabel;
      let value: any = componentConfig.defaultValue;
      if ( value ) {
        this.setValue( flexiLabel, value );
      }
    } );
  }

  getValue( flexiLabel: string ) {
    let field: AbstractControl = this.getControl(flexiLabel);
    if ( field ) {
      return field.value;
    } else {
      console.log(`Can not get value of undefined control ${flexiLabel}.`);
    }
    return;
  }

  get controls() {
    return this.form.controls;
  }

  getControl( fldFlexiLabel ) {
    return this.controls[ fldFlexiLabel ];
  }
 
}
