import { Component, OnInit, forwardRef } from '@angular/core';
import { BaseComponent } from '@L1Process/system/modules/formGenerator/components/feBase.component';

@Component({
  selector: 'feSelect',
  styleUrls: ['feSelect.component.css'],
  templateUrl: 'feSelect.component.html',
})
export class SelectComponent extends BaseComponent implements OnInit {

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
