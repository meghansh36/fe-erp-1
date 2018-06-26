import { FormMasterService } from "@L3Process/system/modules/formBuilder/services/formMaster.service";
import { FieldControlService } from '@L3Process/system/modules/formBuilder/services/fieldControl.service';

export class FeBaseField {
    constructor(public fieldControlService: FieldControlService, public masterFormService: FormMasterService) {}
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
