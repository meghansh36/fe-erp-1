import * as _ from 'lodash';
import { Injectable } from '@angular/core';

export class FeFormJsonService {

    MasterJSON = {
        id: '',
        code: '',
        flexiLabel: '',
        label: '',
        components: []
    }

    getMasterJSON() {
        return this.MasterJSON;
    }

    addComponentToMasterJSON(component) {
        this.MasterJSON.components.push(component);
    }
    
}