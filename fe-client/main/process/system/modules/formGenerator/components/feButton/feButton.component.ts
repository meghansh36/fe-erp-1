import { Component, Input, OnInit } from '@angular/core';
import { BaseComponent } from '@L3Process/system/modules/formGenerator/components/Base.component';

@Component({
  selector: 'feButton',
  styleUrls: ['feButton.component.css'],
  templateUrl: 'feButton.component.html'
})
export class FeButtonComponent extends BaseComponent {

  get theme() {
    return this._config.theme;
  }

  get size() {
    return this._config.size;
  }

  get leftIcon() {
    return this._config.leftIcon;
  }

  get rightIcon() {
    return this._config.rightIcon;
  }

  set theme(theme) {
    this._config.theme = theme;
  }

  set size(size) {
    this._config.size = size;
  }

  set leftIcon(leftIcon) {
    this._config.leftIcon = leftIcon;
  }

  set rightIcon(rightIcon) {
    this._config.rightIcon = rightIcon;
  }

  get submit() {
    return this._config.submit;
  }

  set submit(submit) {
    this._config.submit = submit;
  }

  get icon() {
    return this._config.icon;
  }

  set icon(icon) {
    this._config.icon = icon;
  }


}
