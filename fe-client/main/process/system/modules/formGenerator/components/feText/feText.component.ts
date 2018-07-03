import { Component, OnInit } from '@angular/core';
import { FeBaseComponent } from '../feBase.component';

@Component({
  selector: 'fe-text',
  styleUrls: ['feText.component.css'],
  templateUrl: 'feText.component.html'
})
export class FeTextComponent extends FeBaseComponent implements OnInit {

  ngOnInit() {
    super.ngOnInit();
    this.control.valueChanges.subscribe(this.changeLength.bind(this))
  }

  changeLength(data: string) {
    this.len = data.length;
    if (this.len < this.minLength || this.len > this.maxLength) {
      this._Class = 'badge-danger';
    }
    else {
      this._Class = 'badge-success';
    }
  }

  get hasMinLength() {
    return this.hasValidation('minLength');
  }

  get hasMaxLength() {
    return this.hasValidation('maxLength');
  }
  get minLength() {
    if (this.hasMinLength) {
      return this.config.validations.minLength.value;
    }
    return 0;
  }

  get maxLength() {
    if (this.hasMaxLength) {
      return this.config.validations.maxLength.value;
    }
    return 0;
  }
  get currentLength() {
    if (this.control.hasError('minlength')) {
      return this.control.errors.minlength.actualLength ? this.control.errors.minlength.actualLength : 0;
    }
  }

  get mask() {
    if (this.config.mask) {
      let mask = this.config.mask;
      return { mask };
    }
    return { mask: false };
  }

  get len() {
    return this.length;
  }
  set len(len) {
    this.length = len;
  }

  set _Class(changeClass) {
    this.conditionClass = changeClass;
  }
  get _Class() {
    return this.conditionClass;
  }

}
