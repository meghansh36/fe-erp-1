import { Component, OnInit, ViewChild, AfterViewInit, Input } from '@angular/core';
import { FeFormComponent } from '@L1Process/system/modules/formGenerator/components/feForm/feForm.component';
import { FeFormSchemaService } from '../services/formSchema.service';

export class DefaultFormComponent implements OnInit, AfterViewInit {
    @Input() resource: any;
    @ViewChild(FeFormComponent) form: FeFormComponent;
   
    public schema = [];
    protected code: String = 'DEFAULTFORM';
    
    constructor(protected formSchemaService: FeFormSchemaService) { }

   
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
}
