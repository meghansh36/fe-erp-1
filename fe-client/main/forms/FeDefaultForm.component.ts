import { OnInit, Input, AfterViewInit } from '@angular/core';
import { FormSchemaService } from '@L3Main/services/FormSchema.service';


export class FeDefaultFormComponent implements OnInit, AfterViewInit {
    @Input() resource: any;

    protected _schema: any;
    protected _code: String = 'DEFAULTFORM';
    protected _hideLabel: boolean;
    private __instance: any;
    protected _components: any;

    public formComponent;

    constructor(protected formSchemaService: FormSchemaService) { }

    ngOnInit() {
        this.resource.formInstance = this;
        this.init();
    }

    ngAfterViewInit() {
        console.log('this.code', this.code);
        console.log('this.instance.code', this.instance.code)
    }

    public init() {
        const formSchema = this.formSchemaService.getFormSchema(this.code);
        this.schema = formSchema;
        this._hideLabel = this.schema.hideLabel;
    }

    submit(value: { [name: string]: any }) {
        console.log(value);
    }

    get schema() {
        return this._schema;
    }

    set schema(schema) {
        this._schema = schema;
    }

    get instance() {
        return this.__instance;
    }

    set instance(instance) {
        this.__instance = instance;
    }

    get labelHidden() {
        return this._hideLabel;
    }

    get code() {
        return this._code;
    }

    set code(code) {
        this._code = code;
    }

    get components() {
        return this._components;
    }

    set components(components) {
        this._components = components;
    }

    detail(row: any) {
        console.log(row);
    }

    options(row: any) {
        console.log(row);
    }

}
