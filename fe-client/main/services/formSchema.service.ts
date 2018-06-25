import { Injectable } from '@angular/core';

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
        flexiLabel : 'username',
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
        flexiLabel : 'password',
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
        type : 'SEL',
        code: 'FLD000003',
        flexiLabel : 'gender',
        label: 'Gender',
        placeholder: '--SELECT--',
        options: ['male', 'female', 'others'],
        style: [{ 'name': 'width', 'value': '221px' }],
        id: 'FRM000001-FLD000004',
        formcontrol: 'select-form',
        validators: [{ 'name': 'required', 'value': true }]
      },
      {
        code: 'FLD000004',
        flexiLabel : 'submit',
        id: 'FRM000001-FLD000004',
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
