import { Component, ViewContainerRef } from '@angular/core';
import { FeBaseComponent } from '../feBase.component';

@Component({
  selector: 'fe-textarea',
  styleUrls: ['feTextArea.component.css'],
  templateUrl : 'feTextArea.component.html'
})
export class FeTextAreaComponent extends FeBaseComponent {

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
}
