import { Component, OnInit, ViewChild, AfterViewInit, Input } from '@angular/core';
import { FeFormComponent } from '@L1Process/system/modules/formGenerator/components/feForm/feForm.component';
import { FeFormSchemaService } from '../services/formSchema.service';
import { FeDependentService } from '../process/system/modules/formGenerator/services/dependent.service';

export class DefaultFormComponent implements OnInit, AfterViewInit {
    @Input() resource: any;

    public schema = [];
    protected code: String = 'DEFAULTFORM';
    public instance: any;


    constructor(protected formSchemaService: FeFormSchemaService, public dependent: FeDependentService) { }

    setChildForm(childFormInstance: any) {
        this.instance = childFormInstance;
    }

    ngOnInit() {
        const formSchema = this.formSchemaService.getFormSchema(this.code);
        const formComponents = formSchema.components;
        this.schema = formSchema;
    }

    ngAfterViewInit() {

        this._feAfterViewInit();
        /* let previousValid = this.form.valid;
          this.form.changes.subscribe(() => {
              if (this.form.valid !== previousValid) {
                  previousValid = this.form.valid;
                  this.form.setDisabled('submit', !previousValid);
              }
          });
  
          this.form.setDisabled('submit', true);*/
        //this.form.setValue('input', 'Shubham Verma');
    }
    feAfterViewInit() { }

    _feAfterViewInit() {
        this.feAfterViewInit();
    }

    submit(value: { [name: string]: any }) {
        console.log(value);
    }
    getDependentData(flexilabel, value) {
        let data: any = this.dependent.dependentData(flexilabel, value);
        data.forEach((ele) => {
            if (ele.fieldType == 'SEL') {
                this.instance.componentInstances[ele.flexiLabel].options = ele.data;
            }
            else {
                this.instance.componentInstances[ele.flexiLabel].value = ele.data;
            }
        })
    }
}
