import { ValidatorFn } from '@angular/forms';

export interface FieldConfig {
  disabled?: boolean;
  label?: string;
  // name: string;
  code: string;
  flexiLabel: string;
  options?: string[];
  placeholder?: string;
  type: string;
  validation?: ValidatorFn[];
  validators?: Object[];
  value?: any;
  labelPosition?:string
}
