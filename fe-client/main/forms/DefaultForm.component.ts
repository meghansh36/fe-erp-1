import { Component, OnInit, ViewChild, AfterViewInit, Renderer2 } from '@angular/core';
import { FeFormComponent } from '@L1Process/system/modules/formGenerator/components/feForm/feForm.component';
import { FeFormSchemaService } from '../services/formSchema.service';
import { FeValidatorsService } from '../services/validators.service';
import { FeDependentService } from '../services/dependent.service';

export class DefaultFormComponent implements OnInit, AfterViewInit {
    @ViewChild(FeFormComponent) form: FeFormComponent;
    public schema = [];
    constructor(protected formSchemaService: FeFormSchemaService, public validator: FeValidatorsService  , public dependent: FeDependentService) { }

    protected code: String = 'DEFAULTFORM';
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
