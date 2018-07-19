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

    addComponentToMasterJSON(key, componentRef, parent, index, populateMasterForm) {
        let targetClassesArr;
        if (populateMasterForm) {
            targetClassesArr = parent.className;
            componentRef.parentClass = targetClassesArr;
        } else {
            targetClassesArr = parent.className.trim().split(" ");
            componentRef.parentClass = targetClassesArr[1];
        }

        componentRef.parent = parent.id;
        componentRef.order = index;
        

        if (_.includes(targetClassesArr, 'customDropZone') || _.includes(targetClassesArr, 'FSTdropZone')) {
            this.MasterJSON.components = _.merge(this.MasterJSON.components, {[key]: componentRef});
        } else if (_.includes(targetClassesArr, 'buttonDropZone')) {
            this.MasterJSON.buttons = _.merge(this.MasterJSON.buttons, {[key]: componentRef});
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
       let tempNestedComponents = [];
        /* for (const key in this.MasterJSON.components) {
            if (key) {
                tempComponents.push(this.MasterJSON.components[key].instance.properties);
                tempComponents[tempComponents.length - 1].key = key;
                tempComponents[tempComponents.length - 1].parent = this.MasterJSON.components[key].parent;
                tempComponents[tempComponents.length - 1].order = this.MasterJSON.components[key].order;
                tempComponents[tempComponents.length - 1].parentClass = this.MasterJSON.components[key].parentClass;
            }
        } */

        // first add all components in root_drop, then add in nested containers
        for (const key in this.MasterJSON.components) {
            if (this.MasterJSON.components[key].parent === 'root_drop') {
                tempComponents[this.MasterJSON.components[key].order] = this.MasterJSON.components[key].instance.properties;
                tempComponents[this.MasterJSON.components[key].order].key = key;
                tempComponents[this.MasterJSON.components[key].order].parent = this.MasterJSON.components[key].parent;
                tempComponents[this.MasterJSON.components[key].order].parentClass = this.MasterJSON.components[key].parentClass;
            } /* else {
                let i;
                for ( i = 0; i < tempComponents.length; i++ ) {
                    if (tempComponents[i].key === this.MasterJSON.components[key].parent) {
                        tempNestedComponents = tempComponents[i].components;
                        break;
                    }
                }
                tempNestedComponents[this.MasterJSON.components[key].order] = this.MasterJSON.components[key].instance.properties;
                tempNestedComponents[this.MasterJSON.components[key].order].key = key;
                tempNestedComponents[this.MasterJSON.components[key].order].parent = this.MasterJSON.components[key].parent;
                tempNestedComponents[this.MasterJSON.components[key].order].parentClass = this.MasterJSON.components[key].parentClass;
                tempComponents[i].components = tempComponents;
            } */

            
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
        console.log('final json', this.finalJSON);
    }

    getFinalJSON() {
      return this.finalJSON;
    }
}
