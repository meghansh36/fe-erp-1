import { FormMasterService } from "@L3Process/system/modules/formBuilder/services/formMaster.service";
import { FieldControlService } from "@L3Process/system/modules/formBuilder/services/fieldControl.service";
import { Injectable } from "@angular/core";
import { FormJsonService } from "@L3Process/system/modules/formBuilder/services/formJson.service";

@Injectable()
export class FeBaseField {
  uniqueKey;

  applicableProperties = {
    label: true,
    labelPosition: true,
    description: true,
    tabIndex: true,
    tooltip:true,
  };

  constructor(
    public fieldControlService: FieldControlService,
    public masterFormService: FormMasterService,
    public formJsonService: FormJsonService
  ) {}
  refObj;

  setRef(reference) {
    this.refObj = reference;
  }

  close() {
    this.formJsonService.removeComponent(this.uniqueKey);
    this.refObj.destroy();
    this.formJsonService.buildFinalJSON();
  }

  openModal() {}
}
