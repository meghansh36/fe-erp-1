import { FormMasterService } from "@L3Process/system/modules/formBuilder/services/formMaster.service";
import { FieldControlService } from "@L3Process/system/modules/formBuilder/services/fieldControl.service";
import { Injectable, OnInit, Renderer2, ElementRef, DoCheck, AfterViewInit } from "@angular/core";
import { DefaultsService } from '@L3Process/system/services/Defaults.service';
import { FormJsonService } from "@L3Process/system/modules/formBuilder/services/formJson.service";
import * as _ from 'lodash';


@Injectable()
export class FeBaseField implements OnInit, DoCheck, AfterViewInit {
	showEdit: boolean = true;
	uniqueKey: string;
	refObj: any;
	componentname: string;
	public formDisabled: boolean;
	public formHidden: boolean;
	protected _cssClasses: any;
	public defaultClasses: any;
	public style: any;
	
	public appliedValidations = [
		{
			id: 'required',
			text: 'Required'
		},
		{
			id: 'number+',
			text: 'Number Positive'
		},
		{
			id: 'number-',
			text: 'Number Negative'
		},
		{
			id: 'email',
			text: 'Email'
		},
		{
			id: 'commaseperatedemail',
			text: 'Multiple Email'
		},
		{
			id: 'alphabet',
			text: 'Alphabet'
		},
		{
			id: 'alphanum',
			text: 'Alphanumeric'
		}
	];

	public applicableProperties: any = {
		label: true,
		hideLabel: true,
		labelPosition: true,
		tooltip: false,
		customCssClass: true,
		tabIndex: true,
		marginTop: true,
		marginRight: true,
		marginLeft: true,
		marginBottom: true,
		defaultValueType: true,
		defaultValueSqlQuery: true,
		defaultValueString: true,
		nonPersistent: true,
		dbColumn: true,
		hidden: true,
		clearWhenHidden: true,
		disabled: true,
		flexiLabel: true,
		validations: true,
		customFuncValidationVal: true,
		jsonLogicVal: true,
		formClassValidationVal: true,
		events: true,
		condition: true,
		type: true,
		fldDisabledCondition: true,
		active: true,
		required: true,
		labelWidth: true,
		labelMargin: true,
		width: true,
		description: true
	};

	//All properties 
	/* public applicableProperties: any = {
		label: true,
		hideLabel: true,
		labelPosition: true,
		tooltip: true,
		customCssClass: true,
		tabIndex: true,
		marginTop: true,
		marginRight: true,
		marginLeft: true,
		marginBottom: true,
		defaultValueType: true,
		defaultValueSqlQuery: true,
		defaultValueString: true,
		lovType: true,
		lovSqlQuery: true,
		lovJson: true,
		nonPersistent: true,
		dbColumn: true,
		hidden: true,
		clearWhenHidden: true,
		disabled: true,
		flexiLabel: true,
		prefix: true,
		suffix: true,
		validations: true,
		customFuncValidationVal: true,
		jsonLogicVal: true,
		formClassValidationVal: true,
		minimumLength: true,
		maximumLength: true,
		events: true,
		condition: true,
		type: true,
		fldDisabledCondition: true,
		active: true,
		required: true,
		labelWidth: '',
		labelMargin: '',
		width: ''
	}; */

	public properties: any = {
		label: undefined,
		hideLabel: false,
		labelPosition: 'top',
		tooltip: undefined,
		errorLabel: undefined,
		customCssClass: undefined,
		tabIndex: undefined,
		marginTop: '',
		marginRight: '',
		marginLeft: '',
		marginBottom: '',
		defaultValueType: 'none',
		defaultValueSqlQuery: '',
		defaultValueString: '',
		lovType: 'none',
		lovSqlQuery: '',
		lovJson: '',
		nonPersistent: false,
		dbColumn: undefined,
		componentname: undefined,
		hidden: false,
		clearWhenHidden: false,
		disabled: false,
		flexiLabel: undefined,
		prefix: '',
		suffix: '',
		validations: '',
		customFuncValidationVal: '',
		jsonLogicVal: '',
		formClassValidationVal: '',
		minimumLength: undefined,
		maximumLength: undefined,
		events: '',
		condition: '',
		fldDisabledCondition: '',
		active: true,
		required: false,
		labelWidth: '',
		labelMargin: '',
		width: '',
		mask: [],
		description: ''
	};

	constructor(
		public elemRef: ElementRef,
		public fieldControlService: FieldControlService,
		public masterFormService: FormMasterService,
		public formJsonService: FormJsonService,
		public render: Renderer2,
		public defaults: DefaultsService
	) { }

	ngOnInit() {
		console.log("initialized a new instance 1", this.properties);
		this.setRef(this.fieldControlService.getFieldRef().ref);
		this.uniqueKey = this.masterFormService.getCurrentKey();
		this.masterFormService.setProperties(this.properties);
		this.initFieldStyle();
	}

	ngAfterViewInit() {
		this.addDisplayProps();
	}

	ngDoCheck() {
		this.initFieldStyle();
		this.addDisplayProps();
	}

	initFieldStyle() {
        this.defaultClasses = this.getFieldClasses();
        this.style = this.getFieldStyles();
	}
	
	addDisplayProps() {
        if (this.type == 'HID') {
            this.render.addClass(this.elemRef.nativeElement, 'hidden');
		}
		
        this.render.addClass(this.elemRef.nativeElement, 'fe-field-component');
    }

	getFieldClasses() {
        const type = this.type;
        let labelPosition = 'top';
        const customCssClass = this.customCssClass || '';

        if (!this.hideLabel && this.labelPosition) {
            labelPosition = this.labelPosition;
        }

        let fieldContainerClasses = {};
        let classesStr = `form-field-container frm-fld-container ${type}-container`;
        if (this.prefix || this.suffix) {
            classesStr += ' input-group';
        }
        fieldContainerClasses = this._makeCssClassesObj(classesStr);

        let fieldMainWrapperClasses = {};
        classesStr = `fe-field ${type}-container form-group ${labelPosition}-labeled-field`;
        if (this.hidden) {
            classesStr += ' hidden';
        }
        fieldMainWrapperClasses = this._makeCssClassesObj(classesStr);

        let fieldLabelContainerClasses = {};
        classesStr = `fe-field-container field-label-container ${type}-label-container`;
        if (this.hideLabel) {
            classesStr += ' hidden';
        }
        if (this.minimumLength || this.maximumLength) {
            classesStr += ' has-text-limit';
        }
        fieldLabelContainerClasses = this._makeCssClassesObj(classesStr);

        let fieldWrapperClasses = {};
        classesStr = `field-wrapper ${type}-field-wrapper field-label-${labelPosition}`;
        fieldWrapperClasses = this._makeCssClassesObj(classesStr);

        let fieldDescWrapperClasses = {};
        classesStr = `field-desc-container ${type}-desc-cont`;
        fieldDescWrapperClasses = this._makeCssClassesObj(classesStr);

        let fieldDescContainerClasses = {};
        classesStr = `form-text text-muted field-desc ${type}-desc`;
        fieldDescContainerClasses = this._makeCssClassesObj(classesStr);

        let labelClasses = {};
        classesStr = `field-label ${type}-label`;
        if (this.required) {
            classesStr += ` mandatory-field-label`;
        }
        labelClasses = this._makeCssClassesObj(classesStr);

        let fieldErrorWrapperClasses = {};
        classesStr = `field-error-wrapper ${type}-error-wrapper`;
        fieldErrorWrapperClasses = this._makeCssClassesObj(classesStr);

        let fieldClasses = {};
        classesStr = `form-field ${type}-field ${customCssClass}`;
        if (this.required) {
            classesStr += ` mandatory-field`;
        }
        fieldClasses = this._makeCssClassesObj(classesStr);

        let nestedFieldContainerClasses = {};
        classesStr = `fe-field-container fe-${type}-wrapper`;
        nestedFieldContainerClasses = this._makeCssClassesObj(classesStr);

        let classes: any = {
            fieldMainWrapperClasses,
            fieldWrapperClasses,
            fieldLabelContainerClasses,
            fieldContainerClasses,
            fieldDescWrapperClasses,
            fieldDescContainerClasses,
            labelClasses,
            fieldErrorWrapperClasses,
            fieldClasses,
            nestedFieldContainerClasses
        };

        classes = this.beforeSetDefaultClasses(classes);
        return classes;
		// this.masterFormService.setProperties(this.properties);
	}
	
	public beforeSetDefaultClasses(classes) {
        return classes;
    }

    _makeCssClassesObj(cssClassesStr: string): any {
        const cssClassesObj = {};
        const cssClassArr = cssClassesStr.trim().split(' ')
        cssClassArr.forEach((cssClass) => {
            cssClassesObj[cssClass] = true;
        });
        return cssClassesObj;
    }

    getFieldStyles() {
        const fieldLabelContainerStyle: any = {};
        const fieldMainWrapperStyle = {};

        const labelWidth = this.labelWidth;
        const labelMargin = this.labelMargin;

        if (labelWidth) {
            fieldLabelContainerStyle.width = `${labelWidth}px`;
        }

        let fieldWidth = this.defaults.FIELD_WIDTH;
        if (this.width) {
            fieldWidth = this.width;
        }
        if (fieldWidth) {
            this.render.setStyle(this.elemRef.nativeElement, 'width', fieldWidth);
        }
        if (this.type === 'HID') {
            this.render.addClass(this.elemRef.nativeElement, 'hidden');
        }

        if (labelMargin) {
            const margin: string = `${labelMargin}px`;
            let marginSide: string = 'margin-top';

            switch (this.labelPosition) {
                case 'bottom': {
                    marginSide = 'margin-top';
                    break;
                }
                case 'left': {
                    marginSide = 'margin-right';
                    break;
                }
                case 'right': {
                    marginSide = 'margin-left';
                    break;
                }
                default: {
                    marginSide = 'margin-top';
                    break;
                }
            }
            fieldLabelContainerStyle[marginSide] = margin;
        }

        if (this.labelWidth) {
            fieldLabelContainerStyle['width'] = this.labelWidth;
        }

        if (this.marginLeft) {
            fieldMainWrapperStyle['margin-left'] = this.marginLeft;
        }

        if (this.marginRight) {
            fieldMainWrapperStyle['margin-right'] = this.marginRight;
        }

        if (this.marginTop) {
            fieldMainWrapperStyle['margin-top'] = this.marginTop;
        }

        if (this.marginBottom) {
            fieldMainWrapperStyle['margin-bottom'] = this.marginBottom;
        }

        let inlineStyle = {
            fieldMainWrapperStyle,
            fieldWrapperStyle: {},
            fieldDescWrapperStyle: {},
            fieldDescContainerStyle: {},
            fieldLabelContainerStyle,
            fieldContainerdStyle: {},
            labelStyle: {},
            fieldStyle: {},
            nestedFieldContainerStyle: {}

        };
        inlineStyle = this.beforeSetDefaultStyle(inlineStyle);
        return inlineStyle;
    }

    beforeSetDefaultStyle(styleObj) {
        return styleObj;
    }

	public setRef(reference) {
		this.refObj = reference;
	}

	public close() {
		this.formJsonService.removeComponent(this.uniqueKey);
		this.refObj.destroy();
		this.formJsonService.buildFinalJSON();
	}

	public openModal() {
		this.masterFormService.setCurrentKey(this.uniqueKey);
		this.masterFormService.setProperties(this.properties);
		this.fieldControlService.getFieldRef().parent.openModal();
	}

	public update(propsFromMasterForm) {
		this.properties = _.assignIn({}, propsFromMasterForm);
	}
	
	//Properties getters
	get label() {
		return this.properties.label;
	}

	get hideLabel() {
		return this.properties.hideLabel;
	}

	get labelPosition() {
		return this.properties.labelPosition;
	}

	get tooltip() {
		return this.properties.tooltip;
	}

	get customCssClass() {
		return this.properties.customCssClass;
	}

	get tabIndex() {
		return this.properties.tabIndex;
	}

	get marginTop() {
		return this.properties.marginTop;
	}

	get marginRight() {
		return this.properties.marginRight;
	}

	get marginLeft() {
		return this.properties.marginLeft;
	}

	get marginBottom() {
		return this.properties.marginBottom;
	}

	get defaultValueType() {
		return this.properties.defaultValueType;
	}

	get defaultValueSqlQuery() {
		return this.properties.defaultValueSqlQuery;
	}

	get defaultValueString() {
		return this.properties.defaultValueString;
	}

	get lovType() {
		return this.properties.lovType;
	}

	get lovSqlQuery() {
		return this.properties.lovSqlQuery;
	}

	get lovJson() {
		return this.properties.lovJson;
	}

	get nonPersistent() {
		return this.properties.nonPersistent;
	}

	get dbColumn() {
		return this.properties.dbColumn;
	}

	get hidden() {
		return ( this.properties.hidden || this.formHidden );
	}

	get clearWhenHidden() {
		return this.properties.clearWhenHidden;
	}

	get disabled() {
		return (this.properties.disabled || this.formDisabled);
	}

	get flexiLabel() {
		return this.properties.flexiLabel;
	}

	get prefix() {
		return this.properties.prefix;
	}

	get suffix() {
		return this.properties.suffix;
	}

	get validations() {
		return this.properties.validations;
	}

	get customFuncValidationVal() {
		return this.properties.customFuncValidationVal;
	}

	get jsonLogicVal() {
		return this.properties.jsonLogicVal;
	}

	get formClassValidationVal() {
		return this.properties.formClassValidationVal;
	}

	get minimumLength() {
		return this.properties.minimumLength;
	}

	get maximumLength() {
		return this.properties.maximumLength;
	}

	get events() {
		return this.properties.events;
	}

	get condition() {
		return this.properties.condition;
	}

	get type() {
		return this.properties.type;
	}

	get fldDisabledCondition() {
		return this.properties.fldDisabledCondition;
	}

	get active() {
		return this.properties.active;
	}

	get required() {
		return this.properties.required;
	}

	get mask() {
		return this.properties.mask;
	}

	get labelWidth() {
		return this.properties.labelWidth;
	}
	
	get width() {
		return this.properties.width;
	}

	get description() {
		return this.properties.description;
	}

	get labelMargin() {
		return this.properties.labelMargin;
	}

	get cssClasses() {
		return this._cssClasses;
	}

	set label( label ) {
		this.properties.label = label;
	}

	set hideLabel( hideLabel ) {
		this.properties.hideLabel = hideLabel;
	}

	set labelPosition( labelPosition ) {
		this.properties.labelPosition = labelPosition;
	}

	set tooltip( tooltip ) {
		this.properties.tooltip = tooltip;
	}

	set customCssClass( customCssClass ) {
		this.properties.customCssClass = customCssClass;
	}

	set tabIndex( tabIndex ) {
		this.properties.tabIndex = tabIndex;
	}

	set marginTop( marginTop ) {
		this.properties.marginTop = marginTop;
	}

	set marginRight( marginRight ) {
		this.properties.marginRight = marginRight;
	}

	set marginLeft( marginLeft ) {
		this.properties.marginLeft = marginLeft;
	}

	set marginBottom( marginBottom ) {
		this.properties.marginBottom = marginBottom;
	}

	set defaultValueType( defaultValueType ) {
		this.properties.defaultValueType = defaultValueType;
	}

	set defaultValueSqlQuery( defaultValueSqlQuery ) {
		this.properties.defaultValueSqlQuery = defaultValueSqlQuery;
	}

	set defaultValueString( defaultValueString ) {
		this.properties.defaultValueString = defaultValueString;
	}

	set lovType( lovType ) {
		this.properties.lovType = lovType;
	}

	set lovSqlQuery( lovSqlQuery ) {
		this.properties.lovSqlQuery = lovSqlQuery;
	}

	set lovJson( lovJson ) {
		this.properties.lovJson = lovJson;
	}

	set nonPersistent( nonPersistent ) {
		this.properties.nonPersistent = nonPersistent;
	}

	set dbColumn( dbColumn ) {
		this.properties.dbColumn = dbColumn;
	}

	set hidden( hidden ) {
		this.properties.hidden = hidden;
	}

	set clearWhenHidden( clearWhenHidden ) {
		this.properties.clearWhenHidden = clearWhenHidden;
	}

	set disabled( disabled ) {
		this.properties.disabled = disabled;
	}

	set flexiLabel( flexiLabel ) {
		this.properties.flexiLabel = flexiLabel;
	}

	set prefix( prefix ) {
		this.properties.prefix = prefix;
	}

	set suffix( suffix ) {
		this.properties.suffix = suffix;
	}

	set validations( validations ) {
		this.properties.validations = validations;
	}

	set customFuncValidationVal( customFuncValidationVal ) {
		this.properties.customFuncValidationVal = customFuncValidationVal;
	}

	set jsonLogicVal( jsonLogicVal ) {
		this.properties.jsonLogicVal = jsonLogicVal;
	}

	set formClassValidationVal( formClassValidationVal ) {
		this.properties.formClassValidationVal = formClassValidationVal;
	}

	set minimumLength( minimumLength ) {
		this.properties.minimumLength = minimumLength;
	}

	set maximumLength( maximumLength ) {
		this.properties.maximumLength = maximumLength;
	}

	set events( events ) {
		this.properties.events = events;
	}

	set condition( condition ) {
		this.properties.condition = condition;
	}

	set type( type ) {
		this.properties.type = type;
	}

	set fldDisabledCondition( fldDisabledCondition ) {
		this.properties.fldDisabledCondition = fldDisabledCondition;
	}

	set active( active ) {
		this.properties.active = active;
	}

	set required( required ) {
		this.properties.required = required;
	}

	set labelWidth( labelWidth ) {
		this.properties.labelWidth = labelWidth;
	}

	set labelMargin( labelMargin ) {
		this.properties.labelMargin = labelMargin;
	}

	set width( width ) {
		this.properties.width = width;
	}

	set cssClasses( classes ) {
		this._cssClasses = classes;
	}

}
