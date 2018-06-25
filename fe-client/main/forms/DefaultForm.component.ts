import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FeFormComponent } from '@L1Process/system/modules/formGenerator/components/feForm/feForm.component';
import { FeFormSchemaService } from '@L1Process/system/modules/formGenerator/services/formSchema.service';

export class DefaultFormComponent implements OnInit, AfterViewInit  {
    @ViewChild(FeFormComponent) form: FeFormComponent;
    protected config = [];
    constructor(protected formSchemaService: FeFormSchemaService) {}

    protected code: String = 'DEFAULTFORM';
    ngOnInit() {
        const formSchema = this.formSchemaService.getFormSchema(this.code);
        const formComponents = formSchema.components;
        this.config = formSchema;
    }

    ngAfterViewInit() {
        let previousValid = this.form.valid;
        this.form.changes.subscribe(() => {
            if (this.form.valid !== previousValid) {
                previousValid = this.form.valid;
                this.form.setDisabled('submit', !previousValid);
            }
        });

        this.form.setDisabled('submit', true);
        //this.form.setValue('input', 'Shubham Verma');
    }

    submit(value: {[name: string]: any}) {
        console.log(value);
    }
}
