import { Injectable } from '@angular/core';

@Injectable()
export class FeDefaultsService {
  
    protected _buttonTheme: string  = 'secondary';
    protected _fieldWidth: string = '50%';
    protected _labelPosition: string = 'top';

    get BUTTON_THEME() {
        return this._buttonTheme;
    }

    get FIELD_WIDTH() {
        return this._fieldWidth;
    }

    get LABEL_POSITION() {
        return this._labelPosition;
    }

}