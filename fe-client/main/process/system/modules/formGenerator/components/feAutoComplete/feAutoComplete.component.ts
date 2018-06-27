import { Component, ViewContainerRef, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';

@Component({
  selector: 'fe-auto',
  styleUrls: ['feAutoComplete.component.css'],
  templateUrl: 'feAutoComplete.component.html'
})
export class FeAutoCompleteComponent implements Field {
  @ViewChild('block') block: ElementRef;
  config: FieldConfig;
  group: FormGroup;
  private states = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado',
    'Connecticut', 'Delaware', 'District Of Columbia', 'Federated States Of Micronesia', 'Florida', 'Georgia',
    'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine',
    'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',
    'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
    'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island',
    'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Islands', 'Virginia',
    'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
  private country: string;
  private searched = [];

  constructor(private render: Renderer2) { }
  public model: any;
  error: string;

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : this.states.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    );

  ngOnInit() {
    this.group.controls[this.config.flexiLabel].setValidators([Validators.required]);
    this.group.controls[this.config.flexiLabel].valueChanges.subscribe((data) => {
      const controlErrors: ValidationErrors = this.group.get(this.config.flexiLabel).errors;
      if (controlErrors != null) {
        Object.keys(controlErrors).forEach(keyError => {
          this.error = this.config.flexiLabel + ',has keyError: ' + keyError + ', err value: ', controlErrors[keyError];
        });
      }
      else {
        this.error = '';
      }
    })
  }
}
