import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class FeFormSchemaService {

  private _schema = {
    FRM0000001: {
      "id": "FRM0000001",
      "code": "FRM0000001",
      "formLabel": "Form Label Would be here.",
      "name": "sfsadfasdf",
      "type": "conventional",
      "disabled": false,
      "hidden": false,
      "showCondition": {
        "simple": {
          "show": false,
          "when": "text-field-grh",
          "value": 'rathor',
          "operator": '=='
        }/* ,
        "advanced": [
          "var show; return show = controls.number2.value == 100 ? true : false;",
          "var show1; return show1 = controls.nuumber3.value == 200 ? true : false;"
        ],
        "json": {
          "showCondition": {
            "and": [
              {
                "===": [
                  {
                    "var": "username.value"
                  },
                  "harishrathor"
                ]
              },
              {
                "===": [
                  {
                    "var": "number.value"
                  },
                  169
                ]
              }
            ]
          },
          "condition1": {
            "and": [
              {
                "===": [
                  {
                    "var": "first_name.value"
                  },
                  "harish"
                ]
              },
              {
                "===": [
                  {
                    "var": "username.value"
                  },
                  "harishrathor"
                ]
              }
            ]
          }
        } */
      },
      "disableCondition": {
        "simple": {
          "disable": true,
          "when": "text-field-grh",
          "value": 'harish',
          "operator": '=='
        }
      },
      "active": true,
      "help": "<ul><li>Help 1</li><li>Help 2</li></ul>",
      "components": [
        {
          "type": "TXT",
          "label": "Text FieldLabel",
          "hideLabel": false,
          "labelPosition": "top",
          "tooltip": "This is tooltip",
          "marginTop": "10px",
          "marginRight": "",
          "marginLeft": "",
          "marginBottom": "",
          "defaultValue": "This is default value",
          "nonPersistent": true,
          "dbColumn": "Db -field",
          "hidden": false,
          "clearWhenHidden": false,
          "disabled": false,
          "flexiLabel": "text-field-grh",
          "prefix": "@",
          "suffix": "",
          "appliedValidations": [
            "required"
          ],
          "customFuncValidation": "",
          "jsonLogicVal": "",
          "formClassValidation": "",
          "minimumLength": 10,
          "maximumLength": 24,
          "events": "",
          "showCondition": "",
          "disableCondition": "",
          "active": true,
          "required": true,
          "labelWidth": "",
          "labelMargin": "10px",
          "width": "",
          "mask": [],
          "description": "This is description of the field",
          "icon": "",
          "key": "_4lv8at4iu",
          "order": 0,
          "parent": "root_drop",
          "componentName": "TxtComponent"
        },
        {
          "type": "TXT",
          "label": "First Name",
          "hideLabel": false,
          "labelPosition": "top",
          "marginTop": "",
          "marginRight": "",
          "marginLeft": "",
          "marginBottom": "",
          description: `We'll never share your email with anyone else. We'll never share your email with anyone else. We'll never share your email with anyone else. We'll never share your email with anyone else. We'll never share your email with anyone else.`,
          "defaultValue": "Default value",
          /* "defaultValueType": "none",
          "defaultValueSqlQuery": "",
          "defaultValueString": "", */
          appliedValidations: ['required'],
          validations: {},
          "lovType": "none",
          "lovSqlQuery": "",
          "lovJson": "",
          "nonPersistent": false,
          "hidden": false,
          "clearWhenHidden": false,
          "disabled": false,
          "flexiLabel": "first_name",
          "prefix": "",
          "suffix": "",
          "customFuncValidation": "",
          "jsonLogicVal": "",
          "formClassValidation": "",
          "events": "",
          "showCondition": "",
          "disableCondition": "",
          "active": true,
          "required": true,
          "labelWidth": "",
          "labelMargin": "",
          "width": "50%",
          "mask": ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
          "icon": "",
          "key": "_xhawl6mlx",
          "order": 0,
          "parent": "root_drop",
          "componentName": "TxtComponent"
        },
        {
          "type": "TXT",
          "label": "User Name",
          "hideLabel": false,
          "labelPosition": "top",
          "marginTop": "",
          description: `We'll never share your email with anyone else. We'll never share your email with anyone else. We'll never share your email with anyone else. We'll never share your email with anyone else. We'll never share your email with anyone else.`,
          "marginRight": "",
          "marginLeft": "",
          "marginBottom": "",
          validations: {},
          "defaultValueType": "none",
          "defaultValueSqlQuery": "",
          "defaultValueString": "",
          "lovType": "none",
          "lovSqlQuery": "",
          "lovJson": "",
          "nonPersistent": false,
          "hidden": false,
          "clearWhenHidden": false,
          "disabled": false,
          appliedValidations: ['required', 'email', 'commaseparatedemail'],
          "flexiLabel": "username123",
          "prefix": "",
          "suffix": "",
          "customFuncValidation": "",
          "jsonLogicVal": "",
          "formClassValidation": "",
          "events": "",
          "showCondition": "",
          "disableCondition": "",
          "active": true,
          "required": true,
          "labelWidth": "",
          "labelMargin": "",
          "width": "50%",
          "mask": [],
          "icon": "",
          "key": "_xhawl6mlx",
          "order": 0,
          "parent": "root_drop",
          "componentName": "TxtComponent"
        },
        {
          "type": "DAT",
          "label": "Date",
          "hideLabel": false,
          "labelPosition": "top",
          "marginTop": "",
          "marginRight": "",
          "marginLeft": "",
          "marginBottom": "",
          "defaultValueType": "none",
          "defaultValueSqlQuery": "",
          "defaultValueString": "",
          "lovType": "none",
          "lovSqlQuery": "",
          "lovJson": "",
          "nonPersistent": false,
          "hidden": false,
          "clearWhenHidden": false,
          "disabled": false,
          appliedValidations: ['required'],
          "flexiLabel": "dob",
          "prefix": "",
          "suffix": "",
          description: `We'll never share your email with anyone else. We'll never share your email with anyone else. We'll never share your email with anyone else. We'll never share your email with anyone else. We'll never share your email with anyone else.`,
          "validations": {},
          minimumDate: '01-Jan-2012',
          maximumDate: '01-Jan-2024',
          "customFuncValidation": "",
          "jsonLogicVal": "",
          "formClassValidation": "",
          "events": "",
          "showCondition": "",
          "disableCondition": "",
          "active": true,
          "required": true,
          "labelWidth": "",
          "labelMargin": "",
          "width": "",
          "mask": [],
          "icon": "",
          "key": "_xhawl6mlx",
          "order": 0,
          "parent": "root_drop",
          "componentName": "TxtComponent"
        },
        {
          "type": "TXT",
          "label": "Last Name",
          "hideLabel": false,
          "labelPosition": "top",
          "marginTop": "",
          "marginRight": "",
          "marginLeft": "",
          "marginBottom": "",
          appliedValidations: ['required', 'email', 'commaseparatedemail'],
          "defaultValueType": "string",
          "defaultValueSqlQuery": "",
          "defaultValueString": "fasdfsdfsfsdf",
          "lovType": "none",
          "lovSqlQuery": "",
          "lovJson": "",
          "nonPersistent": true,
          "dbColumn": "fsdfsdf",
          "hidden": false,
          "clearWhenHidden": false,
          "disabled": false,
          "flexiLabel": "last_name",
          "prefix": "",
          "suffix": "",
          "validations": {

            minLength: {
              'value': 8,
              'message': 'Minimum length should be XXLENGTHXX'
            },
            maxLength: {
              'value': 19,
              'message': 'Minimum length should be XXLENGTHXX'
            }
          },
          "customFuncValidation": "",
          "jsonLogicVal": "",
          "formClassValidation": {//{valName:'Message'}
            customPattern: {
              message: 'Custom pattern is not correct.',
              validatorFuncName: 'asyncCustomPatternValidator'
            }
          },
          "events": {
            "change": {
              "handlerOwner": "form",
              "handlerName": "onUserNameChanged",
              "args": "'arg one','arg2' ,'arg 3'"
            },
            "focus": {
              "handlerOwner": "resource",
              "handlerName": "onUserNameFocus",
              "args": "'arg one','arg2' ,'arg 3'"
            }
          },
          "showCondition": "", /* {
            "simple": {
              "show": false,
              "when": "number1",
              "value": 15,
              "operator": '<='
            },
            "advanced": [
              "var show; return show = controls.number2.value == 100 ? true : false;",
              "var show1; return show1 = controls.nuumber3.value == 200 ? true : false;"
            ],
            "json": {
              "showCondition": {
                "and": [
                  {
                    "===": [
                      {
                        "var": "username.value"
                      },
                      "harishrathor"
                    ]
                  },
                  {
                    "===": [
                      {
                        "var": "number.value"
                      },
                      169
                    ]
                  }
                ]
              },
              "condition1": {
                "and": [
                  {
                    "===": [
                      {
                        "var": "first_name.value"
                      },
                      "harish"
                    ]
                  },
                  {
                    "===": [
                      {
                        "var": "username.value"
                      },
                      "harishrathor"
                    ]
                  }
                ]
              }
            }
          } ,*/
          "disableCondition": ''/* {
            "simple": {
              "disable": true,
              "when": "number1",
              "value": 15,
              "operator": '<='
            },
            "advanced": [
              "var show; return show = controls.number2.value == 100 ? true : false;",
              "var show1; return show1 = controls.nuumber3.value == 200 ? true : false;"
            ],
            "json": {
              "showCondition": {
                "and": [
                  {
                    "===": [
                      {
                        "var": "username.value"
                      },
                      "harishrathor"
                    ]
                  },
                  {
                    "===": [
                      {
                        "var": "number.value"
                      },
                      169
                    ]
                  }
                ]
              },
              "condition1": {
                "and": [
                  {
                    "===": [
                      {
                        "var": "first_name.value"
                      },
                      "harish"
                    ]
                  },
                  {
                    "===": [
                      {
                        "var": "username.value"
                      },
                      "harishrathor"
                    ]
                  }
                ]
              }
            }
          } */,
          "active": true,
          "required": false,
          "labelWidth": "",
          "labelMargin": "",
          "width": "50%",
          "mask": [],
          "icon": "",
          "key": "_9hj8j94zh",
          "order": 0,
          "parent": "root_drop",
          "componentName": "TxtComponent"
        },
        {
          "minimumValue": 100,
          "maximumValue": 200,
          "useDelimeter": true,
          "requiredDecimal": true,
          "type": "NUM",
          "label": "Number field",
          "hideLabel": false,
          "labelPosition": "top",
          "marginTop": "",
          "marginRight": "",
          "marginLeft": "",
          "marginBottom": "",
          "defaultValueType": "string",
          "defaultValueSqlQuery": "",
          "defaultValueString": "123",
          "lovType": "none",
          "lovSqlQuery": "",
          "lovJson": "",
          "nonPersistent": true,
          "dbColumn": "adas",
          "hidden": false,
          "clearWhenHidden": false,
          "disabled": false,
          "flexiLabel": "number123",
          "prefix": "",
          "suffix": "",
          "appliedValidations": ['number_positive', 'required'],
          "validations": {},
          "customFuncValidation": "",
          "jsonLogicVal": "",
          "formClassValidation": "",
          "events": "",
          "showCondition": "",
          "disableCondition": "",
          "active": true,
          "required": false,
          "labelWidth": "",
          "labelMargin": "",
          "width": "50%",
          "mask": [],
          "description": "",
          "icon": "",
          "key": "_rl3o427ke",
          "order": 0,
          "parent": "root_drop",
          "componentName": "NumComponent"
        },
        {
          "minimumValue": 100,
          "maximumValue": 200,
          "useDelimeter": true,
          "requiredDecimal": true,
          "type": "NUM",
          "label": "Number 1",
          "hideLabel": false,
          "labelPosition": "top",
          "marginTop": "",
          "marginRight": "",
          "marginLeft": "",
          "marginBottom": "",
          /* "defaultValueType": "string",
          "defaultValueSqlQuery": "",
          "defaultValueString": "123", */
          "defaultValue": '',
          "lovType": "none",
          "lovSqlQuery": "",
          "lovJson": "",
          "nonPersistent": true,
          "dbColumn": "adas",
          "hidden": false,
          "clearWhenHidden": false,
          "disabled": false,
          "flexiLabel": "number1",
          "prefix": "",
          "suffix": "",
          "validations": {},
          "customFuncValidation": "",
          "jsonLogicVal": "",
          "formClassValidation": "",
          "events": "",
          "showCondition": "",
          "disableCondition": "",
          "active": true,
          "required": false,
          "labelWidth": "",
          "labelMargin": "",
          "width": "",
          "mask": [],
          appliedValidations: ['required'],
          "description": "",
          "icon": "",
          "key": "_rl3o427ke",
          "order": 0,
          "parent": "root_drop",
          "componentName": "NumComponent"
        },
        {
          "minimumValue": 100,
          "maximumValue": 200,
          "useDelimeter": true,
          "requiredDecimal": true,
          "type": "NUM",
          "label": "Number 2",
          "hideLabel": false,
          "labelPosition": "top",
          "marginTop": "",
          "marginRight": "",
          "marginLeft": "",
          "marginBottom": "",
          /* "defaultValueType": "string",
          "defaultValueSqlQuery": "",
          "defaultValueString": "123", */
          "defaultValue": '',
          "lovType": "none",
          "lovSqlQuery": "",
          "lovJson": "",
          "nonPersistent": true,
          "dbColumn": "adas",
          "hidden": false,
          "clearWhenHidden": false,
          "disabled": false,
          "flexiLabel": "number2",
          "prefix": "",
          "suffix": "",
          "validations": {},
          "customFuncValidation": "",
          "jsonLogicVal": "",
          "formClassValidation": "",
          "events": "",
          "showCondition": "",
          "disableCondition": "",
          "active": true,
          "required": false,
          "labelWidth": "",
          "labelMargin": "",
          "width": "",
          "mask": [],
          "description": "",
          "icon": "",
          "key": "_rl3o427ke",
          "order": 0,
          "parent": "root_drop",
          "componentName": "NumComponent"
        },
        {
          "minimumValue": 100,
          "maximumValue": 200,
          "useDelimeter": true,
          "requiredDecimal": true,
          "type": "NUM",
          "label": "Number 3",
          "hideLabel": false,
          "labelPosition": "top",
          "marginTop": "",
          "marginRight": "",
          "marginLeft": "",
          "marginBottom": "",
          "defaultValueType": "string",
          "defaultValueSqlQuery": "",
          "defaultValueString": "123",
          "lovType": "none",
          "lovSqlQuery": "",
          "lovJson": "",
          "nonPersistent": true,
          "dbColumn": "adas",
          "hidden": false,
          "clearWhenHidden": false,
          "disabled": false,
          "flexiLabel": "number3",
          "prefix": "",
          "suffix": "",
          "validations": {},
          "customFuncValidation": "",
          "jsonLogicVal": "",
          "formClassValidation": "",
          "events": "",
          "showCondition": "",
          "disableCondition": "",
          "active": true,
          "required": false,
          "labelWidth": "",
          "labelMargin": "",
          "width": "",
          "mask": [],
          "description": "",
          "icon": "",
          "key": "_rl3o427ke",
          "order": 0,
          "parent": "root_drop",
          "componentName": "NumComponent"
        },
        {
          "type": "EML",
          "label": "Single Email",
          "hideLabel": false,
          "labelPosition": "top",
          "marginTop": "",
          "marginRight": "",
          "marginLeft": "",
          "marginBottom": "",
          "defaultValueType": "string",
          "defaultValueSqlQuery": "",
          "defaultValueString": "123",
          "lovType": "none",
          "lovSqlQuery": "",
          "lovJson": "",
          "nonPersistent": true,
          "dbColumn": "adas",
          "hidden": false,
          "clearWhenHidden": false,
          "disabled": false,
          "flexiLabel": "email",
          "prefix": "",
          "suffix": "",
          appliedValidations: ['email'],
          "validations": {},
          "customFuncValidation": "",
          "jsonLogicVal": "",
          "formClassValidation": "",
          "events": "",
          "showCondition": "",
          "disableCondition": "",
          "active": true,
          "required": false,
          "labelWidth": "",
          "labelMargin": "",
          "width": "",
          "mask": [],
          "description": "",
          "icon": "",
          "key": "_rl3o427ke",
          "order": 0,
          "parent": "root_drop",
          "componentName": "NumComponent"
        },
        {
          "type": "EML",
          "label": "Multiple Email",
          "hideLabel": false,
          "labelPosition": "top",
          "marginTop": "",
          "marginRight": "",
          "marginLeft": "",
          "marginBottom": "",
          "defaultValueType": "string",
          "defaultValueSqlQuery": "",
          "defaultValueString": "123",
          "lovType": "none",
          "lovSqlQuery": "",
          "lovJson": "",
          "nonPersistent": true,
          "dbColumn": "adas",
          "hidden": false,
          "clearWhenHidden": false,
          "disabled": false,
          "flexiLabel": "commaseperatedemail",
          "prefix": "",
          "suffix": "",
          appliedValidations: ['commaseperatedemail'],
          "validations": {},
          "customFuncValidation": "",
          "jsonLogicVal": "",
          "formClassValidation": "",
          "events": "",
          "showCondition": "",
          "disableCondition": "",
          "active": true,
          "required": false,
          "labelWidth": "",
          "labelMargin": "",
          "width": "",
          "mask": [],
          "description": "",
          "icon": "",
          "key": "_rl3o427ke",
          "order": 0,
          "parent": "root_drop",
          "componentName": "NumComponent"
        }
      ],
      "buttons": [
        {
          "theme": "primary",
          "size": "large",
          "btnLeftIcon": "",
          "btnRightIcon": "",
          "type": "BTN",
          "label": "adad",
          "hideLabel": false,
          "labelPosition": "top",
          "marginTop": "",
          "marginRight": "",
          "marginLeft": "",
          "marginBottom": "",
          "defaultValueType": "none",
          "defaultValueSqlQuery": "",
          "defaultValueString": "",
          "lovType": "none",
          "lovSqlQuery": "",
          "lovJson": "",
          "nonPersistent": false,
          "hidden": false,
          "clearWhenHidden": false,
          "disabled": true,
          "flexiLabel": "dasdasd",
          "prefix": "",
          "suffix": "",
          "validations": "",
          "customFuncValidation": {},
          events: {
            click: {
              handlerOwner: 'form',
              handlerName: 'submitForm',
              args: "'change event','My' ,'Name  ',   'Is','Khan'"
            }
          },
          "formClassValidation": "",
          "showCondition": "",
          "disableCondition": "",
          "active": true,
          "required": false,
          "labelWidth": "",
          "labelMargin": "",
          "width": "",
          "mask": [],
          "description": "",
          "icon": "",
          "key": "_id7kyj8mv",
          "order": 0,
          "parent": "button_drop",
          "componentName": "BtnComponent"
        },
        {
          id: 'BTN00001',
          label: 'Submit',
          icon: 'md-save',
          events: {
            click: {
              handlerOwner: 'form',
              handlerName: 'submitForm',
              args: "'change event','My' ,'Name  ',   'Is','Khan'"
            }
          }
        },
        {
          id: 'BTN00002',
          label: 'Hover',
          icon: 'md-save',
          events: '',
          submit: true
        }
      ]
    }
  }
    ;

  private _schema1 = {
    id: 'FRM000001',
    name: 'form',
    code: 'FRM000001',
    hideLabel: false,
    label: 'Employee Personal Information',
    condition: {
      type: 'json',
      simple: {
        disabled: true,
        when: 'number',
        eq: 15
      },
      advanced: 'var show; return show = controls.number.value == 155 ? true : false;',
      json: {
        condition: {
          "and": [
            { "===": [{ "var": "username.value" }, 'cool'] },
            { "===": [{ "var": "number.value" }, 155] }
          ]
        }
      }
    },
    formButtons: [
      {
        id: 'BTN00001',
        label: 'Submit',
        icon: 'md-save',
        events: {
          click: {
            handlerOwner: 'form',
            handlerName: 'submitForm',
            args: "'change event','My' ,'Name  ',   'Is','Khan'"
          }
        }
      },
      {
        id: 'BTN00002',
        label: 'Hover',
        icon: 'md-save',
        events: {
          mouseenter: {
            handlerOwner: 'form',
            handlerName: 'submitForm',
            args: "'change event','My' ,'Name  ',   'Is','Khan'"
          }
        }
      }
    ],
    components: [
      {
        type: 'TXT',
        code: 'FLD000001',
        flexiLabel: 'username',
        id: 'FRM000001-FLD000001',
        customCssClass: 'custom-css-class1',
        label: 'Username',
        disabled: false,
        appliedValidations: ['alphabet'],
        prefix: '@',
        defaultValue: 'harish.rathor',
        hidden: false,
        labelMargin: 0,
        tabIndex: '1',
        suffix: 'suff',
        description: 'This is a dummy field. Field description would be here',
        hideLabel: false,
        labelPosition: 'top',

        labelWidth: 0,//To be checked
        width: '50%',
        placeholder: 'Enter your Username',
        formClassValidations: {//{valName:'Message'}
          customPattern: {
            message: 'Custom pattern is not correct.',
            validatorFuncName: 'asyncCustomPatternValidator'
          }
        },
        events: {
          change: {
            handlerOwner: 'form',
            handlerName: '',
            args: "'change event','My' ,'Name  ',   'Is','Khan'"
          },
          focus: {
            handlerOwner: 'resource',
            handlerName: 'onUserNameFocus',
            args: "'focus event','My' ,'Name  ',   'Is','Khan'"
          }
        },
        validations: {
          required: {
            'value': true,
            'message': 'This Field is required'
          },
          minLength: {
            'value': 8,
            'message': 'Minimum length should be XXLENGTHXX'
          },
          maxLength: {
            'value': 19,
            'message': 'Minimum length should be XXLENGTHXX'
          }
        }
      },
      {
        code: 'FLD000002',
        flexiLabel: 'password',
        id: 'FRM000001-FLD000002',

        //formcontrol: 'password-form',
        type: 'TXT',
        label: 'EMAIL',
        prefix: '#',
        suffix: '&',
        defaultValue: 'harishrathor',
        customCssClass: 'custom-css-class2',
        labelWidth: 0,
        labelPosition: 'top',
        labelMargin: 0,
        appliedValidations: ['alphanumeric'],
        description: 'This is a dummy field. Field description would be here.asdfasdfsadfsdfsdfsfsfsf',
        width: '50%',
        placeholder: 'Enter your Password',
        events: {
          input: {
            //event:'input',
            handlerOwner: 'form',
            handlerName: 'onPassWordInput',
            args: "'input','Harish','  Rathor'"
          },
          blur: {
            //event:'blur',
            handlerOwner: 'resource',
            handlerName: 'onPassWordBlur',
            args: "'blur','event', 'Harish'   , 'Rathor'"
          }
        },
        validations: {
          required: {
            'value': true,
            'message': 'This Field is required'
          },
          pattern: {
            'value': '^[a-z0-9_-]{8,15}$',
            'message': 'The Pattern is not correct'
          }
        }
      },
      {
        code: 'FLD000002',
        flexiLabel: 'password',
        id: 'FRM000001-FLD000002',

        //formcontrol: 'password-form',
        type: 'TXT',
        label: 'Password',
        prefix: '#',
        suffix: '&',
        defaultValue: 'harishrathor',
        customCssClass: 'custom-css-class2',
        labelWidth: 0,
        labelPosition: 'top',
        labelMargin: 0,
        appliedValidations: ['alphanumeric'],
        description: 'This is a dummy field. Field description would be here.asdfasdfsadfsdfsdfsfsfsf',
        width: '50%',
        placeholder: 'Enter your Password',
        events: {
          input: {
            //event:'input',
            handlerOwner: 'form',
            handlerName: 'onPassWordInput',
            args: "'input','Harish','  Rathor'"
          },
          blur: {
            //event:'blur',
            handlerOwner: 'resource',
            handlerName: 'onPassWordBlur',
            args: "'blur','event', 'Harish'   , 'Rathor'"
          }
        },
        validations: {
          required: {
            'value': true,
            'message': 'This Field is required'
          },
          pattern: {
            'value': '^[a-z0-9_-]{8,15}$',
            'message': 'The Pattern is not correct'
          }
        }
      },
      {
        code: 'FLD000014',
        flexiLabel: 'email',
        id: 'FRM000001-FLD000014',

        //formcontrol: 'email-form',
        type: 'EML',
        label: 'Email',
        prefix: '',
        suffix: '@',
        defaultValue: 'harish.rathor@gmail.com',
        customCssClass: 'custom-css-class2',
        labelWidth: 0,
        labelPosition: 'top',
        labelMargin: 0,

        description: 'This is a dummy field. Field description would be here.asdfasdfsadfsdfsdfsfsfsf',
        width: '33%',
        placeholder: 'Enter your Password',
        validations: {
          required: {
            'value': true,
            'message': 'This Field is required'
          },
          commaseperatedemail: {
            value: true,
            message: 'Please give comma separated emails.'
          }
        },
        /*  customValidations: {
           commaseperatedemail: {
             name: 'commaseperatedemail',
             validatorFn: function (control: AbstractControl): { [key: string]: boolean } | null {
               let regExp = /^([\w+-.%]+@[\w-.]+\.[A-Za-z]{2,4})(,[\w+-.%]+@[\w-.]+\.[A-Za-z]{2,4}){0,4}$/;
               if (control.value !== undefined) {
                 if (regExp.test(control.value)) {
                   return null;
                 }
                 else {
                   return { 'commaseperatedemail': true };
                 }
               }
             },
             message: 'Email should be correct'
           }
         }*/
      },
      {
        type: 'NUM',
        code: 'FLD000009',
        flexiLabel: 'number',
        id: 'FRM000001-FLD000009',

        //formcontrol: 'number-form',
        label: 'Number',
        defaultValue: 123,
        labelPosition: 'top',
        width: '33%',
        placeholder: 'Enter your Number',
        validations: {
          required: {
            'value': true,
            'message': 'This Field is required'
          }
        },
        customValidations: {
          agelimit: {
            validatorFn: `if (control.value !== undefined && (isNaN(control.value) || control.value < 50)) { return { 'agelimit': true }; } return null; `,
            message: 'Age should be greater than 50'
          }
        },
        jsonValidations: {
          'json': {
            "if": [
              {
                "==": [
                  { "var": "value" }, 150
                ]
              },
              true,
              false
            ]
          },
          'message': 'Value must be 150'
        }
      },
      {
        type: 'NUM',
        code: 'FLD000020',
        flexiLabel: 'condition',
        id: 'FRM000001-FLD000020',

        //formcontrol: 'number-form',
        label: 'Condition Number',
        width: '33%',
        defaultValue: 1234,
        condition: {
          'type': 'advanced',
          'simple': {
            'show': false,
            'when': 'number',
            'eq': 15
          },
          'advanced': 'var show; return show = controls.number.value == 150 ? true : false;',
          "json": {
            "showCondition": {
              "and": [
                { "===": [{ "var": "username.value" }, 'apple'] },
                { "===": [{ "var": "number.value" }, 15] }
              ]
            }
          }
        },
        placeholder: 'Enter your Number',
        validations: {
          required: {

            'value': true,
            'message': 'This Field is required'
          }
        }
      },
      {
        type: 'TXT',
        code: 'FLD000009',
        flexiLabel: 'mask',
        id: 'FRM000001-FLD000019',
        defaultValue: '1234562340',
        //formcontrol: 'mask-form',
        label: 'Mask Input',
        mask: ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
        width: '33%',
        labelPosition: 'top',
        placeholder: '(555) 233 4454',
        validators: [
          {

            'value': true,
            'message': 'This Field is required'
          }
        ]
      },
      {
        type: 'ACS',
        code: 'FLD000008',
        flexiLabel: 'autocomplete',
        id: 'FRM000001-FLD000008',

        //formcontrol: 'auto-form',
        label: 'Country',

        width: '50%',
        placeholder: 'Enter your Country',
        defaultValue: 'Indiana',
        validations: {
          required: {

            'value': true,
            'message': 'This Field is required'
          }
        }
      },
      {
        type: 'ICB',
        code: 'FLD0401234',
        flexiLabel: 'icb-field',
        id: 'FRM000001-FLD0401234',
        //formcontrol: 'auto-form',
        label: 'ICB',
        icon: 'md-assignment_returned'
      },
      {
        type: 'BLK',
        code: 'FLD0001234',
        flexiLabel: 'blank-field',
        id: 'FRM000001-FLD0001234',
        //formcontrol: 'auto-form',
        label: 'Blank Field',
        width: '50%',
      },
      {
        type: 'HID',
        code: 'FLD0011234',
        flexiLabel: 'hidden-field',
        id: 'FRM000001-FLD0011234',
        //formcontrol: 'auto-form',
        label: 'Hidden Field',
        width: '100%',
        defaultValue: 'Hidden field value'
      },
      {
        type: 'SEL',
        code: 'FLD000023',
        flexiLabel: 'parent',
        label: 'Country',
        defaultValue: 'USA',
        isParent: 'Y',
        placeholder: '--SELECT--',
        options: [{
          'code': 'IND',
          'meaning': 'India',
          'tip': 'India'
        }, {
          'code': 'USA',
          'meaning': 'USA',
          'tip': 'USA'
        }],
        id: 'FRM000001-FLD000023',
        //formcontrol: 'select-form',
        validations: {
          required: {

            'value': true,
            'message': 'This Field is required'
          }
        }
      },
      {
        type: 'SEL',
        code: 'FLD000023',
        flexiLabel: 'child',
        label: 'States',
        placeholder: '--SELECT--',
        id: 'FRM000001-FLD000023',
        //formcontrol: 'select-form',
        validations: {
          required: {

            'value': true,
            'message': 'This Field is required'
          }
        },
      },
      {
        type: 'FIL',
        code: 'FLD000015',
        flexiLabel: 'file',
        label: 'file',
        id: 'FRM000001-FLD000015',
        //formcontrol: 'file-form',
        validations: {
          required: {

            'value': true,
            'message': 'This Field is required'
          }
        }
      },
      {
        type: 'MSL',
        code: 'FLD000013',
        flexiLabel: 'multi',
        label: 'Multiselect',
        placeholder: '--SELECT--',
        defaultValue: ['male', 'female'],
        options: ['male', 'female', 'others'],
        id: 'FRM000001-FLD000004',
        //formcontrol: 'select-form',
        validations: {
          required: {

            'value': true,
            'message': 'This Field is required'
          }
        }
      },
      {
        type: 'CHK',
        code: 'FLD000010',
        flexiLabel: 'Checkbox',
        label: 'Checkbox',
        description: "FIeld Description",
        options: ['male', 'female', 'others'],
        id: 'FRM000001-FLD000010',
        defaultValue: 'Y',
        //formcontrol: 'check-form',
        validations: {
          required: {

            'value': true,
            'message': 'This Field is required'
          }
        }
      },
      {
        type: 'RAD',
        code: 'FLD000011',
        flexiLabel: 'Radio',
        label: 'Radio',
        defaultValue: 'HE',
        options: [
          {
            'code': 'HE',
            'meaning': 'Male',
            'tip': 'Male'
          },
          {
            'code': 'SHE',
            'meaning': 'Female',
            'tip': 'Female'
          },
          {
            'code': 'OTH',
            'meaning': 'Other',
            'tip': 'Other'
          }
        ],
        id: 'FRM000001-FLD000011',
        //formcontrol: 'radio-form',
        validations: {
          required: {

            'value': true,
            'message': 'This Field is required'
          }
        }
      },
      {
        type: 'ANC',
        code: 'FLD000021',
        flexiLabel: 'Anchor',
        label: 'Anchor',
        defaultValue: 'url',
        value: 'http://google.com',
        id: 'FRM000001-FLD000021',
      },
      {
        type: 'DAT',
        code: 'FLD000004',
        flexiLabel: 'date',
        label: 'Date',
        id: 'FRM000001-FLD000004',
        //formcontrol: 'date-form',
        placeholder: 'yyyy-mm-dd',
        disabled: false,
        hidden: false,
        labelMargin: 20,
        tabIndex: '1',
        suffix: 'suff',
        defaultValue: { year: 2017, month: 2, day: 13 },
        description: 'This is a dummy field. Field description would be here',
        hideLabel: false,
        labelPosition: 'bottom',

        labelWidth: 0,
        width: '100%',
        customValidations: {
          yearlimit: {
            validatorFn: " if (control.value !== undefined && (isNaN(control.value.year) || control.value.year < 2010)) { return { 'yearlimit': true }; } return null; ",
            message: 'Year should be greater than 2010'
          }
        }
      },
      {
        code: 'FST000001',
        id: 'FRM000001-FST000001',
        type: 'FST',
        flexiLabel: 'fieldset-1',
        label: 'SMS Settings',
        hideLabel: false,
        components: [
          {
            type: 'TXT',
            code: 'FLD000012',
            flexiLabel: 'fst_username',
            id: 'FRM000001-FLD000012',

            //formcontrol: 'fst-username-form',
            customCssClass: 'custom-css-class1',
            label: 'Username',

            disabled: false,
            prefix: '@',
            hidden: false,
            labelMargin: 20,
            tabIndex: '1',
            suffix: 'suff',
            description: 'This is a dummy field. Field description would be here',
            hideLabel: false,
            labelPosition: 'left',

            labelWidth: 0,
            width: '100%',
            placeholder: 'Enter your Username',
            formClassValidations: {
              customPattern: {
                message: 'Custom pattern is not correct.', validatorFuncName: 'asyncCustomPatternValidator'
              }
            },
            events: {
              change: {
                //event:'change',
                handlerOwner: 'form',
                handlerName: 'onUserNameChanged',
                args: "'change event','My' ,'Name  ',   'Is','Khan'"
              },
              focus: {
                //event:'focus',
                handlerOwner: 'resource',
                handlerName: 'onUserNameFocus',
                args: "'focus event','My' ,'Name  ',   'Is','Khan'"
              }
            },
            validations: {
              required: {

                'value': true,
                'message': 'This Field is required'
              },
              minLength: {
                'value': 8,
                'message': 'Minimum length should be XXLENGTHXX'
              },
              maxLength: {
                'value': 19,
                'message': 'Minimum length should be XXLENGTHXX'
              }
            }
          },
          {
            code: 'FLD000005',
            flexiLabel: 'fst-assword-1',
            id: 'FRM000001-FLD0000013',

            //formcontrol: 'fst-password-form',
            type: 'TXT',
            label: 'FST Password',
            prefix: '#',
            suffix: '&',
            customCssClass: 'custom-css-class2',
            labelWidth: 0,
            labelPosition: 'left',
            labelMargin: 0,

            description: 'This is a dummy field. Field description would be here.asdfasdfsadfsdfsdfsfsfsf',
            width: '100%',
            placeholder: 'Enter your Password',
            events: {
              input: {
                //event:'input',
                handlerOwner: 'form',
                handlerName: 'onPassWordInput',
                args: "'input','Harish','  Rathor'"
              },
              blur: {
                //event:'blur',
                handlerOwner: 'resource',
                handlerName: 'onPassWordBlur',
                args: "'blur','event', 'Harish'   , 'Rathor'"
              }
            },
            validations: {
              required: {

                'value': true,
                'message': 'This Field is required'
              },
              pattern: {
                'value': '^[a-z0-9_-]{8,15}$',
                'message': 'The Pattern is not correct'
              }
            }
          },
          {
            type: 'TXT',
            code: 'FLD000014',
            flexiLabel: 'fst-username-1',
            id: 'FRM000001-FLD000012',

            //formcontrol: 'fst-username-form-1',
            customCssClass: 'custom-css-class1',
            label: 'Username Fst 1',

            disabled: false,
            prefix: '@',
            hidden: false,
            labelMargin: 20,
            tabIndex: '1',
            suffix: 'suff',
            description: 'This is a dummy field. Field description would be here',
            hideLabel: false,
            labelPosition: 'left',
            labelWidth: 0,
            width: '50%',
            placeholder: 'Enter your Username',
            formClassValidations: {
              customPattern: { message: 'Custom pattern is not correct.', validatorFuncName: 'asyncCustomPatternValidator' }
            },
            events: {
              change: {
                //event:'change',
                handlerOwner: 'form',
                handlerName: 'onUserNameChanged',
                args: "'change event','My' ,'Name  ',   'Is','Khan'"
              },
              focus: {
                //event:'focus',
                handlerOwner: 'resource',
                handlerName: 'onUserNameFocus',
                args: "'focus event','My' ,'Name  ',   'Is','Khan'"
              }
            },
            validations: {
              required: {

                'value': true,
                'message': 'This Field is required'
              },
              minLength: {
                'value': 8,
                'message': 'Minimum length should be XXLENGTHXX'
              },
              maxLength: {
                'value': 19,
                'message': 'Minimum length should be XXLENGTHXX'
              }
            }
          },
          {
            code: 'FLD000002',
            flexiLabel: 'pfst-assword-2',
            id: 'FRM000001-FLD000002',

            //formcontrol: 'fst-password-form-2',
            type: 'TXT',
            label: 'FST Password 2',
            prefix: '#',
            suffix: '&',
            customCssClass: 'custom-css-class2',
            labelWidth: 0,
            labelPosition: 'left',
            labelMargin: 0,

            description: 'This is a dummy field. Field description would be here.asdfasdfsadfsdfsdfsfsfsf',
            width: '50%',
            placeholder: 'Enter your Password',
            events: {
              input: {
                //event:'input',
                handlerOwner: 'form',
                handlerName: 'onPassWordInput',
                args: "'input','Harish','  Rathor'"
              },
              blur: {
                //event:'blur',
                handlerOwner: 'resource',
                handlerName: 'onPassWordBlur',
                args: "'blur','event', 'Harish'   , 'Rathor'"
              }
            },
            validations: {
              required: {

                'value': true,
                'message': 'This Field is required'
              },
              pattern: {
                'value': '^[a-z0-9_-]{8,15}$',
                'message': 'The Pattern is not correct'
              }
            }
          },
          {
            code: 'FST000002',
            flexiLabel: 'dummy-fst-1',
            id: 'FRM000001-FST000002',
            type: 'FST',
            label: 'Mail Settings',
            hideLabel: false,
            components: [
              {
                type: 'TXT',
                code: 'FLD000017',
                flexiLabel: 'fst_username-5',
                id: 'FRM000001-FLD000017',

                //formcontrol: 'fst-username-form-5',
                customCssClass: 'custom-css-class1',
                label: 'Username',

                disabled: false,
                prefix: '@',
                hidden: false,
                labelMargin: 20,
                tabIndex: '1',
                suffix: 'suff',
                description: 'This is a dummy field. Field description would be here',
                hideLabel: false,
                labelPosition: 'left',

                labelWidth: 0,
                width: '50%',
                placeholder: 'Enter your Username',
                formClassValidations: {
                  customPattern: { message: 'Custom pattern is not correct.', validatorFuncName: 'asyncCustomPatternValidator' }
                },
                events: {
                  change: {
                    //event:'change',
                    handlerOwner: 'form',
                    handlerName: 'onUserNameChanged',
                    args: "'change event','My' ,'Name  ',   'Is','Khan'"
                  },
                  focus: {
                    //event:'focus',
                    handlerOwner: 'resource',
                    handlerName: 'onUserNameFocus',
                    args: "'focus event','My' ,'Name  ',   'Is','Khan'"
                  }
                },
                validations: {
                  required: {

                    'value': true,
                    'message': 'This Field is required'
                  },
                  minLength: {

                    'value': 8,
                    'message': 'Minimum length should be XXLENGTHXX'
                  },
                  maxLength: {

                    'value': 19,
                    'message': 'Minimum length should be XXLENGTHXX'
                  }
                }
              },
              {
                code: 'FLD000015',
                flexiLabel: 'fst-assword-1',
                id: 'FRM000001-FLD0000011',

                //formcontrol: 'fst-password-form-5',
                type: 'TXT',
                label: 'FST Password',
                prefix: '#',
                suffix: '&',
                customCssClass: 'custom-css-class2',
                labelWidth: 0,
                labelPosition: 'left',
                labelMargin: 0,

                description: 'This is a dummy field. Field description would be here.asdfasdfsadfsdfsdfsfsfsf',
                width: '50%',
                placeholder: 'Enter your Password',
                events: {
                  input: {
                    //event:'input',
                    handlerOwner: 'form',
                    handlerName: 'onPassWordInput',
                    args: "'input','Harish','  Rathor'"
                  },
                  blur: {
                    //event:'blur',
                    handlerOwner: 'resource',
                    handlerName: 'onPassWordBlur',
                    args: "'blur','event', 'Harish'   , 'Rathor'"
                  }
                },
                validations: {
                  required: {

                    'value': true,
                    'message': 'This Field is required'
                  },
                  pattern: {

                    'value': '^[a-z0-9_-]{8,15}$',
                    'message': 'The Pattern is not correct'
                  }
                }
              },
              {
                type: 'TXT',
                code: 'FLD000018',
                flexiLabel: 'fst-username-5',
                id: 'FRM000001-FLD000018',

                //formcontrol: 'fst-username-form-5',
                customCssClass: 'custom-css-class1',
                label: 'Username Fst 1',

                disabled: false,
                prefix: '@',
                hidden: false,
                labelMargin: 20,
                tabIndex: '1',
                suffix: 'suff',
                description: 'This is a dummy field. Field description would be here',
                hideLabel: false,
                labelPosition: 'left',
                labelWidth: 0,
                width: '50%',
                placeholder: 'Enter your Username',
                formClassValidations: {
                  customPattern: { message: 'Custom pattern is not correct.', validatorFuncName: 'asyncCustomPatternValidator' }
                },
                events: {
                  change: {
                    //event:'change',
                    handlerOwner: 'form',
                    handlerName: 'onUserNameChanged',
                    args: "'change event','My' ,'Name  ',   'Is','Khan'"
                  },
                  focus: {
                    //event:'focus',
                    handlerOwner: 'resource',
                    handlerName: 'onUserNameFocus',
                    args: "'focus event','My' ,'Name  ',   'Is','Khan'"
                  }
                },
                validations: {
                  required: {

                    'value': true,
                    'message': 'This Field is required'
                  },
                  minLength: {

                    'value': 8,
                    'message': 'Minimum length should be XXLENGTHXX'
                  },
                  maxLength: {

                    'value': 19,
                    'message': 'Minimum length should be XXLENGTHXX'
                  }
                }
              },
              {
                code: 'FLD000022',
                flexiLabel: 'pfst-assword-8',
                id: 'FRM000001-FLD000022',

                //formcontrol: 'fst-password-form-7',
                type: 'TXT',
                label: 'FST Password 2',
                prefix: '#',
                suffix: '&',
                customCssClass: 'custom-css-class2',
                labelWidth: 0,
                labelPosition: 'left',
                labelMargin: 0,

                description: 'This is a dummy field. Field description would be here.asdfasdfsadfsdfsdfsfsfsf',
                width: '50%',
                placeholder: 'Enter your Password',
                events: {
                  input: {
                    //event:'input',
                    handlerOwner: 'form',
                    handlerName: 'onPassWordInput',
                    args: "'input','Harish','  Rathor'"
                  },
                  blur: {
                    //event:'blur',
                    handlerOwner: 'resource',
                    handlerName: 'onPassWordBlur',
                    args: "'blur','event', 'Harish'   , 'Rathor'"
                  }
                },
                validations: {
                  required: {

                    'value': true,
                    'message': 'This Field is required'
                  },
                  pattern: {

                    'value': '^[a-z0-9_-]{8,15}$',
                    'message': 'The Pattern is not correct'
                  }
                }
              },
              {
                code: 'FST000002',
                flexiLabel: 'dummy-fst-1',
                id: 'FRM000001-FST000002',
                type: 'FST',
                label: 'Some Settings',
                hideLabel: true,
                components: [
                  {
                    type: 'TXT',
                    code: 'FLD000020',
                    flexiLabel: 'fst-username-6',
                    id: 'FRM000001-FLD000020',

                    //formcontrol: 'fst-username-form-9',
                    customCssClass: 'custom-css-class1',
                    label: 'Username Fst 1',

                    disabled: false,
                    prefix: '@',
                    hidden: false,
                    labelMargin: 20,
                    tabIndex: '1',
                    suffix: 'suff',
                    description: 'This is a dummy field. Field description would be here',
                    hideLabel: false,
                    labelPosition: 'left',
                    labelWidth: 0,
                    width: '50%',
                    placeholder: 'Enter your Username',
                    formClassValidations: {
                      customPattern: { message: 'Custom pattern is not correct.', validatorFuncName: 'asyncCustomPatternValidator' }
                    },
                    events: {
                      change: {
                        //event:'change',
                        handlerOwner: 'form',
                        handlerName: 'onUserNameChanged',
                        args: "'change event','My' ,'Name  ',   'Is','Khan'"
                      },
                      focus: {
                        //event:'focus',
                        handlerOwner: 'resource',
                        handlerName: 'onUserNameFocus',
                        args: "'focus event','My' ,'Name  ',   'Is','Khan'"
                      }
                    },
                    validations: {
                      required: {

                        'value': true,
                        'message': 'This Field is required'
                      },
                      minLength: {

                        'value': 8,
                        'message': 'Minimum length should be XXLENGTHXX'
                      },
                      maxLength: {

                        'value': 19,
                        'message': 'Minimum length should be XXLENGTHXX'
                      }
                    }
                  },
                  {
                    code: 'FLD000025',
                    flexiLabel: 'pfst-assword-9',
                    id: 'FRM000001-FLD000025',

                    //formcontrol: 'fst-password-form-8',
                    type: 'TXT',
                    label: 'FST Password 2',
                    prefix: '#',
                    suffix: '&',
                    customCssClass: 'custom-css-class2',
                    labelWidth: 0,
                    labelPosition: 'left',
                    labelMargin: 0,

                    description: 'This is a dummy field. Field description would be here.asdfasdfsadfsdfsdfsfsfsf',
                    width: '50%',
                    placeholder: 'Enter your Password',
                    events: {
                      input: {
                        //event:'input',
                        handlerOwner: 'form',
                        handlerName: 'onPassWordInput',
                        args: "'input','Harish','  Rathor'"
                      },
                      blur: {
                        //event:'blur',
                        handlerOwner: 'resource',
                        handlerName: 'onPassWordBlur',
                        args: "'blur','event', 'Harish'   , 'Rathor'"
                      }
                    },
                    validations: {
                      required: {

                        'value': true,
                        'message': 'This Field is required'
                      },
                      pattern: {

                        'value': '^[a-z0-9_-]{8,15}$',
                        'message': 'The Pattern is not correct'
                      }
                    }
                  }
                ]
              }
            ]
          }

        ]
      },
      {
        type: 'TIM',
        code: 'FLD000005',
        flexiLabel: 'time',
        label: 'Time',
        id: 'FRM000001-FLD000005',
        //formcontrol: 'time-form',

        disabled: false,
        defaultValue: { hour: 12, minute: 13, second: 13 },
        prefix: '@',
        hidden: false,
        labelMargin: 20,
        tabIndex: '1',
        suffix: 'suff',
        description: 'This is a dummy field. Field description would be here',
        hideLabel: false,
        labelPosition: 'top',

        labelWidth: 0,
        width: '100%',
        validations: {
          required: {

            'value': true,
            'message': 'This Field is required'
          }
        }
      },
      {
        type: 'TXA',
        code: 'FLD000006',
        flexiLabel: 'description',
        id: 'FRM000001-FRM000006',

        //formcontrol: 'description-form',
        label: 'Description',

        defaultValue: 'Some tet area default value',
        width: '100%',
        placeholder: 'Enter Description',
        validations: {
          required: {
            'value': true,
            'message': 'Field is required'
          },
          minLength: {

            'value': 50,
            'message': 'Minimum length required is XXLENGTHXX.'
          },
          maxLength: {

            'value': 150,
            'message': 'Maximum length required is XXLENGTHXX.'
          }
        }
      }/* ,
      {
        type: 'EDT',
        code: 'FLD000016',
        flexiLabel: 'editor',
        id: 'FRM000001-FRM00000016',

        //formcontrol: 'description-form',
        label: 'Html Description',

        defaultValue: 'Some editor default value',
        width: '100%',
        placeholder: 'Enter Description',
        validations: {
          required: {
            'value': true,
            'message': 'Field is required'
          }
        }
      } */,
      {
        code: 'FLD000007',
        flexiLabel: 'submit',
        id: 'FRM000001-FLD000007',
        //formcontrol: 'button-form',
        type: 'BTN',
        size: 'small',
        action: 'submit',
        label: 'Submit',
        icon: 'md-save',
        width: '',
        disabled: false,
        class: ['btn', 'btn-primary']
      }
    ]
  };

  addProps(components, code) {
    if (components.length !== 0) {
      for (let i in components) {
        const field = components[i];
        const index: string = i.toString();
        const fieldCode = `${field.type}000${index}`;
        const fieldId = code + "_" + fieldCode;
        field.code = fieldCode;
        field.id = fieldId;
        if (field.type === 'FST') {
          this.addProps(field.components, code);
        }
      }
    }
  };


  getFormSchema(code) {
    let form = this._schema[code];
    console.log("Form", form);
    this.addProps(form.components, code);
    this.addProps(form.buttons, code);
    return form;
  };
}
