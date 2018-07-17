import { FormMasterService } from "@L3Process/system/modules/formBuilder/services/formMaster.service";
import { FieldControlService } from "@L3Process/system/modules/formBuilder/services/fieldControl.service";
import { Injectable, OnInit } from "@angular/core";
import { FormJsonService } from "@L3Process/system/modules/formBuilder/services/formJson.service";
import * as _ from 'lodash';


@Injectable()
export class FeBaseField  implements OnInit {
  showEdit = true;
  uniqueKey;
  refObj;
  componentname;
  public appliedValidations  = [
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
  	label:true,
  	hideLabel:true,
  	labelPosition:true,
  	tooltip:true,
  	errorLabel:true,
  	customCssClass:true,
  	tabIndex:true,
  	marginTop:true,
  	marginRight:true,
  	marginLeft:true,
  	marginBottom:true,
  	defaultValueType:true,
  	defaultValueSqlQuery:true,
  	defaultValueStringValue: true,
    lovType: true,
  	lovSqlQuery:true,
  	lovJson:true,
  	nonPersistent:true,
  	dbColumn:true,
  	hidden: true,
  	clearWhenHidden: true,
  	disabled: true,
  	flexiLabel: true,
  	prefix: true,
  	suffix: true,
  	validations: true,
  	// customValFuncFlag:true,
  	customFuncValidationVal: true,
  	// jsonLogicValFlag:true,
  	jsonLogicVal: true,
  	// formClassValFlag:true,
		formClassValidationVal: true,
		minimumLength: true,
		maximumLength: true,
		events: true,
		condition: true,
		type: true,
		fldDisabledCondition: true,
    active: true,
  };

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
	};

	constructor(
		public fieldControlService: FieldControlService,
		public masterFormService: FormMasterService,
		public formJsonService: FormJsonService
	) { }

	ngOnInit() {
		console.log("initialized a new instance 1", this.properties);
		this.setRef(this.fieldControlService.getFieldRef().ref);
		this.uniqueKey = this.masterFormService.getCurrentKey();
		this.masterFormService.setProperties(this.properties);
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
}
