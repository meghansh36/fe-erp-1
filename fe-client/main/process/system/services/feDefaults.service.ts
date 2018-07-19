import { Injectable } from '@angular/core';

@Injectable()
export class FeDefaultsService {
  
    protected _buttonTheme: string  = 'secondary';
    protected _fieldWidth: string = '50%';
    protected _labelPosition: string = 'top';
    protected _buttonSize: string = 'small';
    protected _buttonThemeClasses = {
        "primary": "btn btn-primary",
        "secondary": "btn btn-secondary",
        "success": "btn btn-success",
        "danger": "btn btn-danger",
        "warning": "btn btn-warning",
        "info": "btn btn-info",
        "light": "btn btn-light",
        "dark": "btn btn-dark",
        "link": "btn btn-link",
        "outline-primary": "btn btn-outline-primary",
        "outline-secondary": "btn btn-outline-secondary",
        "outline-success": "btn btn-outline-success",
        "outline-danger": "btn btn-outline-danger",
        "outline-warning": "btn btn-outline-warning",
        "outline-info": "btn btn-outline-info",
        "outline-light": "btn btn-outline-light",
        "outline-dark": "btn btn-outline-dark",
        "primary btn-lg": "btn btn-primary btn-lg",
        "secondary btn-lg": "btn btn-secondary btn-lg",
        "primary btn-sm": "btn btn-primary btn-sm",
        "secondary btn-sm": "btn btn-secondary btn-sm",
        "primary btn-lg btn-block": "btn btn-primary btn-lg btn-block",
        "secondary btn-lg btn-block": "btn btn-secondary btn-lg btn-block",
        "lg btn-primary": "btn btn-lg btn-primary"
      };
      
      protected _buttonSizeClasses = {
        'large': 'btn-lg',
        'small': 'btn-sm',
        'medium': 'btn-md'
      };

    get BUTTON_THEME() {
        return this._buttonTheme;
    }

    get FIELD_WIDTH() {
        return this._fieldWidth;
    }

    get LABEL_POSITION() {
        return this._labelPosition;
    }

    get BUTTON_THEMES() {
        return this._buttonThemeClasses;
    }

    get BUTTON_SIZES() {
        return this._buttonSizeClasses; 
    }

    get BUTTON_SIZE() {
        return this._buttonSize; 
    }

}