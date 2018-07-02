import { Component } from '@angular/core';
import { FeBaseComponent } from '../feBase.component';

@Component({
  selector: 'fe-text',
  styleUrls: ['feText.component.css'],
  templateUrl: 'feText.component.html'
})
export class FeTextComponent extends FeBaseComponent {

    get hasMinLength() {
        return this.hasValidation( 'minLength' );
    }

    get hasMaxLength() {
        return this.hasValidation( 'maxLength' );
    }
    get minLength() {
        if ( this.hasMinLength ) {
            return this.config.validations.minLength.value;
        }
        return 0;
    }

    get maxLength() {
        if ( this.hasMaxLength ) {
            return this.config.validations.maxLength.value;
        }
        return 0;
    }

    get mask() {
        if (this.config.mask) {
            let mask = this.config.mask;
            return { mask };
        }
        return false;
    }
}
