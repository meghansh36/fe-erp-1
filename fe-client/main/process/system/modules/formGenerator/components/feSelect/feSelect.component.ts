import { Component, OnInit, forwardRef } from '@angular/core';
import { BaseComponent } from '@L1Process/system/modules/formGenerator/components/Base.component';

@Component({
  selector: 'feSelect',
  styleUrls: ['feSelect.component.css'],
  templateUrl: 'feSelect.component.html',
})
export class FeSelectComponent extends BaseComponent implements OnInit {

  protected _options: any;

  ngOnInit() {
    super.ngOnInit();
    this.options = this.config.options;
  }

  get options() {
    return this._options;
  }

  set options(option) {
    this._options = option;
  }
}
