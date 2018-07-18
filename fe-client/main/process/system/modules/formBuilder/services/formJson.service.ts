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
        components: {},
        buttons: {}
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
        const targetClassesArr = parent.className.trim().split(" ");
        component.parent = parent.id;
        component.order = index;
        if (_.includes(targetClassesArr, 'customDropZone') || _.includes(targetClassesArr, 'FSTdropZone')) {
            this.MasterJSON.components = _.merge(this.MasterJSON.components, {[key]: component});
        } else if (_.includes(targetClassesArr, 'buttonDropZone')) {
            this.MasterJSON.buttons = _.merge(this.MasterJSON.buttons, {[key]: component});
        }
    }

    removeComponent(key) {
        for (const comp in this.MasterJSON.components) {
            if (this.MasterJSON.components[comp].parent === key)
             {
                 _.unset(this.MasterJSON.components, comp);
             }
        }
        _.unset(this.MasterJSON.components, key);
    }

    updateMasterJSON(parent) {
        console.log(this.MasterJSON);
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
       let tempComponents = [];
        for (const key in this.MasterJSON.components) {
            if (key) {
                tempComponents.push(this.MasterJSON.components[key].instance.properties);
                tempComponents[tempComponents.length - 1].key = key;
                tempComponents[tempComponents.length - 1].parent = this.MasterJSON.components[key].parent;
                tempComponents[tempComponents.length - 1].order = this.MasterJSON.components[key].order;
            }
        }
        finalJSON.components = tempComponents;
        tempComponents = [];
        for (const key in this.MasterJSON.buttons) {
            if (key) {
                tempComponents.push(this.MasterJSON.buttons[key].instance.properties);
                tempComponents[tempComponents.length - 1].key = key;
                tempComponents[tempComponents.length - 1].parent = this.MasterJSON.buttons[key].parent;
                tempComponents[tempComponents.length - 1].order = this.MasterJSON.buttons[key].order;
            }
        }
        finalJSON.buttons = tempComponents;
        this.finalJSON = finalJSON;
    }

    getFinalJSON() {
      return this.finalJSON;
    }
}
