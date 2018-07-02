import * as _ from 'lodash';
import { Injectable } from '@angular/core';

export class FeFormJsonService {

    MasterJSON = {
        id: '',
        code: '',
        flexiLabel: '',
        label: '',
        components: {}
    };

    finalJSON;

    getMasterJSON() {
        return this.MasterJSON;
    }

    setMasterJSON(masterJson) {
        this.MasterJSON = masterJson;
    }

    addComponentToMasterJSON(key, component) {
        this.MasterJSON.components = _.merge(this.MasterJSON.components, {[key]: component});
    }

    removeComponent(key) {
        _.unset(this.MasterJSON.components, key);
    }

    buildFinalJSON() {
        const finalJSON = {
            ...this.MasterJSON
        };

        const tempComponents = [];

        for (const key in this.MasterJSON.components) {
            if (key) {
                tempComponents.push(this.MasterJSON.components[key].instance.properties);
            }
        }

        finalJSON.components = tempComponents;
        this.finalJSON = finalJSON;
    }

    getFinalJSON() {
      return this.finalJSON;
    }
}
