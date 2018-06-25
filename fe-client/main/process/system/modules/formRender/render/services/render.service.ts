import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeRenderService {

  constructor() { }

  public json = [
    {
      id: 'FRM000001',
      name: 'form',
      code: 'FRM000001',
      label: 'My From',
      component: [
        {
          name: 'input',
          code: 'FLD000001',
          property: {
            id: 'FRM000001-FRM000001',
            style: [],
            formcontrol: 'username-form',
            type: 'text',
            lable: 'Username',
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
          }
        },
        {
          name: 'input',
          code: 'FLD000001',
          property: {
            id: 'FRM000001-FRM000002',
            style: [],
            formcontrol: 'password-form',
            type: 'password',
            lable: 'Password',
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
          }
        },
        {
          name: 'select',
          code: 'FLD000004',
          property: {
            lable: 'Gender',
            options: ['male', 'female', 'others'],
            style: [{ 'name': 'width', 'value': '221px' }],
            id: 'FRM000001-FLD000004',
            formcontrol: 'select-form',
            validators: [{ 'name': 'required', 'value': true }]
          }
        },
        {
          name: 'date',
          code: 'FLD000005',
          property: {
            lable: 'Date',
            id: 'FRM000001-FLD000004',
            formcontrol: 'date-form',
            validators: [{ 'name': 'required', 'value': true }],
            type: 'date'
          }
        },
        {
          name: 'number',
          code: 'FLD000006',
          property: {
            lable: 'Phone',
            id: 'FRM000001-FLD000005',
            formcontrol: 'number-form',
            height: '',
            width: '100%',
            maxlength: 10,
            placeholder: 'Enter Phone Number',
            validators: [{ 'name': 'required', 'value': true }, { 'name': 'length', 'value': '10' }],
            type: 'number'
          }
        },
        {
          name: 'time',
          code: 'FLD000006',
          property: {
            lable: 'Time',
            id: 'FRM000001-FLD0000056',
            formcontrol: 'time-form',
            validators: [],
          }
        },
        {
          name: 'file',
          code: 'FLD000006',
          property: {
            lable: 'Upload',
            id: 'FRM000001-FLD000006',
            formcontrol: 'file-form',
            height: '',
            width: '100%',
            placeholder: 'Enter Phone Number',
            validators: [],
            type: 'file'
          }
        },
       /* {
          name: 'checkbox',
          code: 'FLD000007',
          property: {
            lable: 'Checkbox',
            id: 'FRM000001-FLD000007',
            options: ['option-1', 'option-2', 'option-3'],
            formcontrol: 'check-form',
            height: '',
            width: '100%',
            validators: [],
            type: 'checkbox'
          }
        }*/,
        {
          name: 'autocomplete',
          code: 'FLD000011',
          property: {
            id: 'FRM000001-FRM000011',
            style: [{ 'name': 'width', 'value': '100%' }, { 'name': 'display', 'value': 'block' }],
            formcontrol: 'auto-form',
            type: 'text',
            lable: 'Autocomplete',
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
          }
        },
        {
          name: 'multi',
          code: 'FLD000008',
          property: {
            lable: 'Multi-select',
            options: ['male', 'female', 'others'],
            style: [{ 'name': 'width', 'value': '221px' }],
            id: 'FRM000001-FLD000008',
            formcontrol: 'multi-form',
            validators: [{ 'name': 'required', 'value': true }]
          }
        },
        {
          name: 'textarea',
          code: 'FLD000003',
          property: {
            id: 'FRM000001-FLD000003',
            cols: '100',
            rows: '6',
            style: [],
            lable: 'Description',
            formcontrol: 'textarea-form',
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
          }
        },
        {
          name: 'button',
          code: 'FLD000002',
          property: {
            id: 'FRM000001-FLD000004',
            formcontrol: 'button-form',
            type: 'button',
            action: 'submit',
            height: '',
            width: '',
            disabled: false,
            value: 'submit',
            class: ['btn', 'btn-primary']
          }
        }
      ]
    }
  ]
}
