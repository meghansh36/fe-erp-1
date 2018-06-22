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
            formcontrol: 'name-form',
            type: 'text',
            lable: 'Name',
            height: '',
            width: '100%',
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
          name: 'textarea',
          code: 'FLD000003',
          property: {
            id: 'FRM000001-FLD000003',
            col: '100px',
            row: '150px',
            type: 'text',
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
