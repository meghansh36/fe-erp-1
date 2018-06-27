import { FormMasterService } from "@L3Process/system/modules/formBuilder/services/formMaster.service";
import { FieldControlService } from '@L3Process/system/modules/formBuilder/services/fieldControl.service';
import { Injectable } from "@angular/core";
import { FormJsonService } from "@L3Process/system/modules/formBuilder/services/formJson.service";

@Injectable()
export class FeBaseField {

    applicableProperties = {
  name: true,
  type: true,
  flexiLabel: true,
  label: true,
  hideLabel: true,
  labelPosition: true,
  labelWidth: true,
  labelMargin: true,
  placeholder: true,
  description: true,
  tooltip: true,
  errorLabel: true,
  inputMask: true,
  prefix: true,
  suffix: true,
  customCssClass: true,
  tabIndex: true,
  clearValue: true,
  hidden: true,
  disabled: true,
  defaultValue: true,
  sqlQuery: true,
  jsFunction: true,
  jsonLogic: true,
  nonPersistent: true,
  appliedValidation: true,
  minimumLength: true,
  maximumLength: true,
  regularExpression: true,
  customErrorFunction: true,
  customValidationFunction: true,
  JSONLogic: true,
  marginTop: true,
  marginRight: true,
  marginBottom: true,
  marginLeft: true,
  customFunction: true,
  conditionalJsonLogic: true,

    };

    constructor(public fieldControlService: FieldControlService,
        public masterFormService: FormMasterService,
        public formJsonService: FormJsonService) {}
    refObj;

    setRef(reference) {
        this.refObj = reference;
    }

    close() {
        this.refObj.destroy();
    }

    openModal() {
    }
}
