import * as _ from 'lodash';
import { Injectable } from '@angular/core';

@Injectable()
export class FeFormJsonService {

    MasterJSON = {
        id: '',
        code: '',
        formLabel: '',
        name: '',
        display: '',
        disabled: false,
        hidden: false,
        conditionalHidden: '',
        conditionalDisabled: '',
        active: true,
        help: '',
        components: {}
    };

    finalJSON;
    DOMComponentArray: any = [];

    getMasterJSON() {
        return this.MasterJSON;
    }

    setMasterJSON(masterJson) {
        this.MasterJSON = masterJson;
    }

    addComponentToMasterJSON(key, component, parent, index) {
        component.parent = parent;
        component.order = index;
        this.MasterJSON.components = _.merge(this.MasterJSON.components, {[key]: component});
    }

    removeComponent(key) {
        _.unset(this.MasterJSON.components, key);
    }

    updateMasterJSON(parent) {
        console.log('update', parent);
        for (let i = 0; i < parent.children.length; i++) {
           const childKey = parent.children[i].generatedKey;
           const parentKey = parent.children[i].parentComponent;
           this.MasterJSON.components[childKey].order = i;
           this.MasterJSON.components[childKey].parent = parentKey;
        }
    }

    buildFinalJSON() {
         const finalJSON = {
            ...this.MasterJSON
        };
       const tempComponents = [];
        for (const key in this.MasterJSON.components) {
            if (key) {
                tempComponents.push(this.MasterJSON.components[key].instance.properties);
                tempComponents[tempComponents.length - 1].key = key;
                tempComponents[tempComponents.length - 1].parent = this.MasterJSON.components[key].parent;
                tempComponents[tempComponents.length - 1].order = this.MasterJSON.components[key].order;
            }
        }
        finalJSON.components = tempComponents;
        this.finalJSON = finalJSON; 
    }

    getFinalJSON() {
      return this.finalJSON;
    }
}
