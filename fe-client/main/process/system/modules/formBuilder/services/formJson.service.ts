import * as _ from 'lodash';
import { Injectable } from '@angular/core';

export class FeFormJsonService {

    MasterJSON = {
        id: '',
        code: '',
        flexiLabel: '',
        label: '',
        components: {}
    }

    getMasterJSON() {
        return this.MasterJSON;
    }

    setMasterJSON(masterJson) {
        this.MasterJSON = masterJson;
    }

    addComponentToMasterJSON(key, component) {
        console.log(key);
        this.MasterJSON.components = _.merge(this.MasterJSON.components, {[key]: component});
    }

    removeComponent(key) {
        console.log('key to remove', key);
        console.log(_.unset(this.MasterJSON.components, key));
        console.log(this.MasterJSON);
    }
}
