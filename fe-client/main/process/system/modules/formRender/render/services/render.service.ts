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
      leble: 'My From',
      component: [
        {
          name: 'input',
          code: 'FLD000001',
          property: {
            id: 'FRM000001-FRM000001',
            class: ['col-8'],
            formcontrol: 'username-form',
            type: 'text',
            label: 'Username',
            height: '',
            width: '',
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
            class: ['col-8'],
            formcontrol: 'name-form',
            type: 'text',
            label: 'Name',
            height: '',
            width: '',
            placeholder: 'Enter your Name',
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
            id: 'FRM000001-FRM000003',
            formcontrol: 'password-form',
            type: 'password',
            label: 'Password',
            height: '30px',
            width: '250px',
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
          name: 'button',
          code: 'FLD000002',
          property: {
            id: 'FRM000001-FLD000004',
            formcontrol: 'button-form',
            type: 'button',
            height: '',
            width: '',
            disabled: false,
            value: 'submit',
            class: ['btn','btn-primary']
          }
        },
        {
          name: 'textarea',
          code: 'FLD000003',
          property: {
            id: 'FRM000001-FLD000005',
            col: '30px',
            row: '50px',
            formcontrol: 'textarea-form',
            placeholder: 'Enter introduction',
            validators: [
              {
                'required': 'required'
              },
              {
                'min-length': '50'
              },
              {
                'max-length': '150'
              }
            ]
          }
        }

      ]
    }
  ]
}
