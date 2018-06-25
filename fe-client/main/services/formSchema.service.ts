import { Injectable } from '@angular/core';
import { ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FeFormSchemaService {

  constructor() { }

  private _schema = {
    id: 'FRM000001',
    name: 'form',
    code: 'FRM000001',
    label: 'Employee Personal Information',
    components: [
      {
        type: 'TXT',
        code: 'FLD000001',
        flexiLabel: 'username',
        id: 'FRM000001-FRM000001',
        style: [],
        formcontrol: 'username-form',
        label: 'Username',
        height: '',
        width: '100%',
        placeholder: 'Enter your Username',
        validators: [
          {
            'name': 'required',
            'value': true,
          },
          {
            'name': 'min-length',
            'value': 8
          },
          {
            'name': 'max-length',
            'value': 15
          }
        ]
      },
      {
        code: 'FLD000002',
        flexiLabel: 'password',
        id: 'FRM000001-FRM000002',
        style: [],
        formcontrol: 'password-form',
        type: 'TXT',
        label: 'Password',
        height: '',
        width: '100%',
        placeholder: 'Enter your Password',
        validators: [
          {
            'name': 'required',
            'value': true,
          },
          {
            'name': 'min-length',
            'value': 8
          },
          {
            'name': 'max-length',
            'value': 15
          }
        ]
      },
      {
        code: 'FLD000014',
        flexiLabel: 'email',
        id: 'FRM000001-FRM000014',
        style: [],
        formcontrol: 'email-form',
        type: 'EML',
        label: 'Email',
        height: '',
        width: '100%',
        placeholder: 'Enter your Email',
        validators: [
          {
            'name': 'required',
            'value': true,
          }
        ]
      },
      {
        type: 'NUM',
        code: 'FLD000009',
        flexiLabel: 'number',
        id: 'FRM000001-FRM000009',
        style: [],
        formcontrol: 'number-form',
        label: 'Number',
        height: '',
        width: '100%',
        placeholder: 'Enter your Number',
        validators: [
          {
            'name': 'required',
            'value': true,
          },
          {
            'name': 'min-length',
            'value': 8
          },
          {
            'name': 'max-length',
            'value': 15
          }
        ]
      },
      {
        type: 'ACS',
        code: 'FLD000008',
        flexiLabel: 'autocomplete',
        id: 'FRM000001-FRM000008',
        style: [],
        formcontrol: 'auto-form',
        label: 'Country',
        height: '',
        width: '100%',
        placeholder: 'Enter your Country',
        validators: [
          {
            'name': 'required',
            'value': true,
          },
          {
            'name': 'min-length',
            'value': 8
          },
          {
            'name': 'max-length',
            'value': 15
          }
        ]
      },
      {
        type: 'SEL',
        code: 'FLD000003',
        flexiLabel: 'gender',
        label: 'Gender',
        placeholder: '--SELECT--',
        options: ['male', 'female', 'others'],
        style: [{ 'name': 'width', 'value': '221px' }],
        id: 'FRM000001-FLD000004',
        formcontrol: 'select-form',
        validators: [{ 'name': 'required', 'value': true }]
      },
      {
        type: 'FIL',
        code: 'FLD000015',
        flexiLabel: 'file',
        label: 'file',
        id: 'FRM000001-FLD000015',
        formcontrol: 'file-form',
        validators: [{ 'name': 'required', 'value': true }]
      },
      {
        type: 'MSL',
        code: 'FLD000013',
        flexiLabel: 'multi',
        label: 'Multiselect',
        placeholder: '--SELECT--',
        options: ['male', 'female', 'others'],
        style: [{ 'name': 'width', 'value': '221px' }],
        id: 'FRM000001-FLD000004',
        formcontrol: 'select-form',
        validators: [{ 'name': 'required', 'value': true }]
      },
      {
        type: 'CHK',
        code: 'FLD000010',
        flexiLabel: 'Checkbox',
        label: 'Checkbox',
        options: ['male', 'female', 'others'],
        id: 'FRM000001-FLD000010',
        formcontrol: 'check-form',
        validators: [{ 'name': 'required', 'value': true }]
      },
      {
        type: 'RAD',
        code: 'FLD000011',
        flexiLabel: 'Radio',
        label: 'Radio',
        options: ['male', 'female', 'others'],
        id: 'FRM000001-FLD000011',
        formcontrol: 'radio-form',
        validators: [{ 'name': 'required', 'value': true }]
      },
      {
        type: 'DAT',
        code: 'FLD000004',
        flexiLabel: 'date',
        label: 'Date',
        id: 'FRM000001-FLD000004',
        formcontrol: 'date-form',
        placeholder: 'dd-mm-yyyy',
        validators: [{ 'name': 'required', 'value': true }],
      },
      {
        type: 'TIM',
        code: 'FLD000005',
        flexiLabel: 'time',
        label: 'Time',
        id: 'FRM000001-FLD000005',
        formcontrol: 'time-form',
        validators: [{ 'name': 'required', 'value': true }],
      },
      /*{
        type: 'FST',
        code: 'FLD000014',
        flexiLabel: 'fieldset',
        label: 'Fieldset',
        id: 'FRM000001-FLD000014',
        formcontrol: 'field-form',
      },*/
      {
        type: 'TXA',
        code: 'FLD000006',
        flexiLabel: 'description',
        id: 'FRM000001-FRM000006',
        style: [],
        formcontrol: 'description-form',
        label: 'Description',
        height: '',
        width: '100%',
        placeholder: 'Enter Description',
        validators: [
          {
            'name': 'required',
            'value': true,
          },
          {
            'name': 'min-length',
            'value': 50
          },
          {
            'name': 'max-length',
            'value': 150
          }
        ]
      },
      {
        code: 'FLD000007',
        flexiLabel: 'submit',
        id: 'FRM000001-FLD000007',
        formcontrol: 'button-form',
        type: 'BTN',
        action: 'submit',
        label: 'Submit',
        height: '',
        width: '',
        disabled: false,
        value: 'submit',
        class: ['btn', 'btn-primary']
      }
    ]
  };

  getFormSchema = function (code: String) {
    return this._schema;
  };
}
