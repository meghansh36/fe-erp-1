import { OnInit, Input } from '@angular/core';
import { FeFormSchemaService } from '../services/formSchema.service';


export class DefaultFormComponent implements OnInit {
    @Input() resource: any;

    public schema = [];
    protected code: String = 'DEFAULTFORM';
    public instance: any;

    constructor(protected formSchemaService: FeFormSchemaService) { }

    setChildForm(childFormInstance: any) {
        this.instance = childFormInstance;
    }

    ngOnInit() {
        const formSchema = this.formSchemaService.getFormSchema(this.code);
        this.schema = formSchema;
    }

    submit(value: { [name: string]: any }) {
        console.log(value);
    }
    
}
