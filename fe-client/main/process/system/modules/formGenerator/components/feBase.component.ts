import { OnInit, Injectable, Renderer2, ElementRef, OnDestroy, AfterViewInit, SimpleChange } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';
import * as _ from 'lodash';
import { DefaultsService } from '@L3Process/system/services/Defaults.service';
import { ValidatorsService } from '@L3Process/system/modules/formGenerator/services/validators.service';
import { UtilityService } from '@L3Process/system/services/Utility.service';
import { Field } from '@L1Process/system/modules/formGenerator/models/field.interface';
import { FieldConfig } from '@L1Process/system/modules/formGenerator/models/field-config.interface';
import * as jsonLogic from 'json-logic-js';


@Injectable()
export class FeBaseComponent implements Field, OnInit, OnDestroy, AfterViewInit {

    public config: FieldConfig;
    public group: FormGroup;
    public form: any;
    public formComponent: any;

    public conditionClass: string;
    public error: string;
    public validators = [];
    public name: string;
    public errors = [];
    public style: any;
    public defaultClasses: any;

    public $statusChange: any;
    public $valueChange: any;
    public $simpleConditionChange: any;
    public $groupValueChange: any;

    //Copy config in its prop
    protected _config: FieldConfig;



    constructor(public elemRef: ElementRef, public validator: ValidatorsService, public render: Renderer2, public utility: UtilityService, public defaults: DefaultsService) {
    }

    ngOnInit(): void {
        this.init();
    }

    init() {
        this._config = _.assign({}, this.config);
        this.applyDefaultValidations();
        this.initFieldStyle();
        this.applyObservers();
    }

    ngAfterViewInit() {
        this.bindEvents();
        this.addDisplayProps();
    }


    ngOnDestroy() {
        this.$statusChange.unsubscribe();
        this.$valueChange.unsubscribe();
        this.$simpleConditionChange.unsubscribe();
        this.$groupValueChange.unsubscribe();
    }

    addDisplayProps() {
        if (this.type == 'HID') {
            this.render.addClass(this.elemRef.nativeElement, 'hidden');
        }
        if ( this.disabled ) {
            this.control.disable( { onlySelf: true, emitEvent: true } );
        }
        this.render.addClass(this.elemRef.nativeElement, 'fe-field-component');
    }

    bindEvents() {
        try {
            const eventsObjArr: object = this.events;
            if (eventsObjArr) {
                const field = this.fieldRef;
                for (let eventName in eventsObjArr) {
                    this.render.listen(field, eventName, this.utility.fieldEventHandler.bind(this.utility, eventName, eventsObjArr[eventName], this));
                }
            }
        } catch (error) {
            console.log(error);
        }
    }

    applyObservers(): void {
        this.$statusChange = this.control.statusChanges.subscribe(this.onStatusChange.bind(this));
        if (this.isParent) {
            this.$valueChange = this.control.valueChanges.subscribe(this.onValueChange.bind(this));
        }
        if (this.condition) {
            this.render.addClass(this.elemRef.nativeElement, 'hidden');
            const type = this.condition['type'];
            const conditionHandlerName = `${type}ConditionHandler`;
            if (this[conditionHandlerName] && typeof this[conditionHandlerName] == 'function') {
                this[conditionHandlerName](this.condition[type]);
            }
            else {
                console.log(`Given condition handler is not a function for field ${this.flexiLabel}`);
            }
        }
    }

    detectGroupValueChange(conditionFnction: Function) {
        this.$groupValueChange = this.group.valueChanges.subscribe(conditionFnction.bind(this));
    }

    simpleConditionHandler(condition: { [key: string]: any }) {
        if (condition.show == true) {
            this.render.addClass(this.elemRef.nativeElement, 'hidden');
            this.$simpleConditionChange = this.group.get(condition.when).valueChanges.subscribe((data) => {
                data == condition.eq ? this.render.removeClass(this.elemRef.nativeElement, 'hidden') : this.render.addClass(this.elemRef.nativeElement, 'hidden');
            })
        }
        else {
            this.render.removeClass(this.elemRef.nativeElement, 'hidden');
            this.$simpleConditionChange = this.group.get(condition.when).valueChanges.subscribe((data) => {
                data == condition.eq ? this.render.addClass(this.elemRef.nativeElement, 'hidden') : this.render.removeClass(this.elemRef.nativeElement, 'hidden');
            })
        }
    }

    advancedConditionHandler(condition: string) {
        const theInstructions = new Function('controls', 'formObject', 'fieldObject', condition);
        function handler() {
            const show = theInstructions(this.group.controls, this.form, this);
            if (show === true) {
                this.render.removeClass(this.elemRef.nativeElement, 'hidden');
            } else {
                this.render.addClass(this.elemRef.nativeElement, 'hidden');
            }
        }
        this.detectGroupValueChange(handler);
    }

    jsonConditionHandler(condition: object) {
        function handler() {
            if (jsonLogic.apply(condition['condition'], this.group.controls)) {
                this.render.removeClass(this.elemRef.nativeElement, 'hidden');
            }
            else {
                this.render.addClass(this.elemRef.nativeElement, 'hidden');
            }
        }
        this.detectGroupValueChange(handler);
    }


    onValueChange(value: SimpleChange) {
        if (value) {
            this.formComponent.getDependentData(this.flexiLabel, value);
        }
        return;
    }

    onStatusChange(status: string): void {
        if (status == 'INVALID') {
            this.addCssClass('fieldClasses', 'is-invalid');
            this.addCssClass('labelClasses', 'text-danger');
            this.removeCssClass('labelClasses', 'valid-field-label');
        } else if (status == 'VALID') {
            this.removeCssClass('fieldClasses', 'is-invalid');
            this.removeCssClass('labelClasses', 'text-danger');
            this.addCssClass('labelClasses', 'valid-field-label');
        }
    }

    removeCssClass(targetKey: string, classStr: string): boolean {
        if (!this.defaultClasses[targetKey]) {
            return false;
        }
        this.defaultClasses[targetKey][classStr] = false;
        return true;
    }

    addCssClass(targetKey: string, classStr: string): boolean {
        if (!this.defaultClasses[targetKey]) {
            return false;
        }
        if (this.hasCssClass(targetKey, classStr)) {
            return true;
        }
        this.defaultClasses[targetKey][classStr] = true;
        return true;
    }

    toggleCssClass(targetKey: string, classStr: string): boolean {
        if (this.hasCssClass(targetKey, classStr)) {
            return this.removeCssClass(targetKey, classStr);
        } else {
            return this.addCssClass(targetKey, classStr);
        }
    }

    hasCssClass(targetKey: string, classStr: string): boolean {
        return this.defaultClasses[targetKey] && this.defaultClasses[targetKey][classStr];
    }

    applyDefaultValidations(): void {
        if (this.validations) {
            this.applyNgValidators();
        }
        if (this.customValidations) {
            this.applyCustomValidations();
        }

        if (this.formClassValidations) {
            this.applyFormClassValidations();
        }

        if (this.jsonValidations) {
            this.applyJsonValidations();
        }
        this.control.setValidators(this.validators);
    }

    applyNgValidators(): void {
        this.validators = this.validators.concat(this.validator.getValidators(this.validations, this.control));
        this.errors = this.validator.transformToValidErr(this.validations);
    }

    applyCustomValidations(): void {
        try {
            const validations = this.customValidations;
            for (let name in validations) {
                const validation = validations[name];
                const fnStr: string = validation.validatorFn;
                const fn = new Function('control', fnStr);
                const message: string = validation.message;
                if (typeof fn == 'function') {
                    this.validators.push(fn);
                    const errObj = {
                        name,
                        message
                    };
                    this.errors.push(errObj)
                } else {
                    console.log(`Given validator is not a function for validation ${name} for field ${this.flexiLabel}`);
                }
            }
        } catch (err) {
            console.log(err);
        }
    }

    applyFormClassValidations(): void {
        try {
            if (!this.form) {
                console.log(`Form class instance not found in field for applying form class validations for field ${this.code}`);
                return;
            }
            const validations = this.formClassValidations;
            for (let validationName in validations) {
                const validation = validations[validationName];
                const validatorFunc = validation.validatorFuncName;
                const errorMessage = validation.message;
                if (this.form[validatorFunc] && typeof this.form[validatorFunc] == 'function') {
                    this.control.setAsyncValidators(this.form[validatorFunc].bind(this.form));
                    const errorObj = {
                        name: validationName,
                        message: errorMessage
                    };
                    this.errors.push(errorObj);
                } else {
                    console.log(`Form class validator function ${validatorFunc} does not exist for ${validationName} custom validation for field ${this.code}.`);
                }
            }
        } catch (err) {
            console.log(err);
        }
    }

    applyJsonValidations() {
        const json = this.jsonValidations;
        let fn = function (control: AbstractControl): { [key: string]: boolean } | null { if (jsonLogic.apply(json['json'], control) != true) { return { 'json': true }; } return null; }
        this.validators.push(fn);
        const errorObj = {
            name: 'json',
            message: json['message']
        };
        this.errors.push(errorObj);
    }

    initFieldStyle() {
        this.defaultClasses = this.utility.getFieldClasses( this );
        this.style = this.utility.getFieldStyles( this );
    }

    public beforeSetDefaultClasses(classes) {
        return classes;
    }


    beforeSetDefaultStyle(styleObj) {
        return styleObj;
    }

    hasNgValidation(validationName: string) {
        return (this.validations && this.validations[validationName] && this.validations[validationName].value);
    }

    hasCustomValidation(validationName: string) {
        return (this.customValidations && this.customValidations[validationName]);
    }

    hasFormClassValidation(validationName: string) {
        return (this.formClassValidations && this.formClassValidations[validationName]);
    }

    hasValidation(validationName: string) {
        return (this.hasNgValidation(validationName) || this.hasCustomValidation(validationName) || this.hasFormClassValidation(validationName));
    }

    get isMandatory(): boolean {
        return (this.validations && this.validations['required'] && this.validations.required.value);
    }

    get isValid() {
        return this.control.valid;
    }

    get isInvalid() {
        return this.control.invalid;
    }

    get hasError() {
        return this.isInvalid && (this.dirty || this.touched);
    }

    get dirty() {
        return this.control.dirty;
    }

    get touched() {
        return this.control.touched;
    }
    get control(): AbstractControl {
        return this.group.controls[this.flexiLabel];
    }

    get fieldId() {
        return this.id;
    }

    get fieldRef() {
        return document.querySelector(`#${this.fieldId}`);
    }

    get hasTextLenghtLimit() {
        return (this.hasValidation('maxLength') || this.hasValidation('minLength'));
    }


    get resource() {
        return this.form.resource;
    }

    set value(value: any) {
        this.control.setValue(value, { emitEvent: true, onlySelf: true });
    }

    get value() {
        return this.formComponent.getValue(this.flexiLabel);
    }

    get show() {
        return this._config.show;
    }

    set show(show) {
        this._config.show = show;
    }

    get disabled() {
        return this._config.disabled;
    }

    get label() {
        return this._config.label;
    }

    get id() {
        return this._config.id;
    }

    get hideLabel() {
        return this._config.hideLabel;
    }

    get prefix() {
        return this._config.prefix;
    }

    get suffix() {
        return this._config.suffix;
    }

    get customCssClass() {
        return this._config.customCssClass;
    }

    get description() {
        return this._config.description;
    }

    get code() {
        return this._config.code;
    }

    get flexiLabel() {
        return this._config.flexiLabel;
    }

    get options() {
        return this._config.options;
    }

    get isParent() {
        return this._config.isParent;
    }

    get placeholder() {
        return this._config.placeholder;
    }

    get type() {
        return this._config.type;
    }

    get validation() {
        return this._config.validation;
    }

    get customValidations() {
        return this._config.customValidations;
    }

    get jsonValidations() {
        return this._config.jsonValidations;
    }

    get validations() {
        return this._config.validations;
    }

    get formClassValidations() {
        return this._config.formClassValidations;
    }

    get mask() {
        return this._config.mask;
    }

    get labelPosition() {
        return this._config.labelPosition;
    }

    get labelWidth() {
        return this._config.labelWidth;
    }

    get hidden() {
        return this._config.hidden;
    }

    get labelMargin() {
        return this._config.labelMargin;
    }

    get tabIndex() {
        return this._config.tabIndex;
    }

    get marginTop() {
        return this._config.marginTop;
    }

    get marginRight() {
        return this._config.marginRight;
    }

    get marginBottom() {
        return this._config.marginBottom;
    }

    get marginLeft() {
        return this._config.marginLeft;
    }

    get width() {
        return this._config.width;
    }

    get events() {
        return this._config.events;
    }

    get condition() {
        return this._config.condition;
    }

    get defaultValue() {
        return this._config.defaultValue;
    }

    get components() {
        return this._config.components;
    }

    get theme() {
        return this._config.theme;
    }

    get size() {
        return this._config.size;
    }

    get leftIcon() {
        return this._config.leftIcon;
    }

    get rightIcon() {
        return this._config.rightIcon;
    }

    set disabled(disabled) {
        this._config.disabled = disabled;
    }

    set label(label) {
        this._config.label = label;
    }

    set id(id) {
        this._config.id = id;
    }

    set hideLabel(hideLabel) {
        this._config.hideLabel = hideLabel;
    }

    set prefix(prefix) {
        this._config.prefix = prefix;
    }

    set suffix(suffix) {
        this._config.suffix = suffix;
    }

    set customCssClass(customCssClass) {
        this._config.customCssClass = customCssClass;
    }

    set description(description) {
        this._config.description = description;
    }

    set code(code) {
        this._config.code = code;
    }

    set flexiLabel(flexiLabel) {
        this._config.flexiLabel = flexiLabel;
    }

    set options(options) {
        this._config.options = options;
    }

    set isParent(isParent) {
        this._config.isParent = isParent;
    }

    set placeholder(placeholder) {
        this._config.placeholder = placeholder;
    }

    set type(type) {
        this._config.type = type;
    }

    set validation(validation) {
        this._config.validation = validation;
    }

    set customValidations(customValidations) {
        this._config.customValidations = customValidations;
    }

    set jsonValidations(jsonValidations) {
        this._config.jsonValidations = jsonValidations;
    }

    set validations(validations) {
        this._config.validations = validations;
    }

    set formClassValidations(formClassValidations) {
        this._config.formClassValidations = formClassValidations;
    }

    set mask(mask) {
        this._config.mask = mask;
    }

    set labelPosition(labelPosition) {
        this._config.labelPosition = labelPosition;
    }

    set labelWidth(labelWidth) {
        this._config.labelWidth = labelWidth;
    }

    set hidden(hidden) {
        this._config.hidden = hidden;
    }

    set labelMargin(labelMargin) {
        this._config.labelMargin = labelMargin;
    }

    set tabIndex(tabIndex) {
        this._config.tabIndex = tabIndex;
    }

    set marginTop(marginTop) {
        this._config.marginTop = marginTop;
    }

    set marginRight(marginRight) {
        this._config.marginRight = marginRight;
    }

    set marginBottom(marginBottom) {
        this._config.marginBottom = marginBottom;
    }

    set marginLeft(marginLeft) {
        this._config.marginLeft = marginLeft;
    }

    set width(width) {
        this._config.width = width;
    }

    set events(events) {
        this._config.events = events;
    }

    set condition(condition) {
        this._config.condition = condition;
    }

    set defaultValue(defaultValue) {
        this._config.defaultValue = defaultValue;
    }

    set components(components) {
        this._config.components = components;
    }

    set theme(theme) {
        this._config.theme = theme;
    }

    set size(size) {
        this._config.size = size;
    }

    set leftIcon(leftIcon) {
        this._config.leftIcon = leftIcon;
    }

    set rightIcon(rightIcon) {
        this._config.rightIcon = rightIcon;
    }

    get ckeditor() {
        return this._config.ckeditor;
    }

    set ckeditor(ckeditor) {
        this._config.ckeditor = ckeditor;
    }

    get tooltip() {
        return this._config.tooltip;
    }

    set tooltip(tooltip) {
        this._config.tooltip = tooltip;
    }

    get icon() {
        return this._config.icon;
    }

    set icon(icon) {
        this._config.icon = icon;
    }

}