import { FormMasterService } from "@L3Process/system/modules/formBuilder/services/formMaster.service";


export class FeBaseField {
    constructor() {}
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
