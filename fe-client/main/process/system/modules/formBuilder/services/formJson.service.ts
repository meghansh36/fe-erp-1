import * as _ from 'lodash';
import { Injectable } from '@angular/core';

@Injectable()
export class FeFormJsonService {

    MasterJSON = {
        id: '',
        code: '',
        formLabel: '',
        name: '',
        type: '',
        disabled: false,
        hidden: false,
        disableCondition: '',
        showCondition: '',
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
        /* let targetClassesArr;
        if (populateMasterForm) {
            targetClassesArr = [parent.className];
            componentRef.parentClass = targetClassesArr[0];
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

        if (parent.id !== 'root_drop') {
            this.MasterJSON.components[parent.id].components[index] 
        } */

        if (parent === 'root_drop') {
            this.MasterJSON.components = _.merge(this.MasterJSON.components, {[key]: componentRef});
            this.MasterJSON.components[key].instance.properties.key = key;
            this.MasterJSON.components[key].instance.properties.order = index;
            this.MasterJSON.components[key].instance.properties.parent = parent;
            this.MasterJSON.components[key].instance.properties.componentName = componentRef.componentType.name;
        } else if (parent === 'button_drop') {
            this.MasterJSON.buttons = _.merge(this.MasterJSON.buttons, {[key]: componentRef});
            this.MasterJSON.buttons[key].instance.properties.key = key;
            this.MasterJSON.buttons[key].instance.properties.order = index;
            this.MasterJSON.buttons[key].instance.properties.parent = parent;
            this.MasterJSON.buttons[key].instance.properties.componentName = componentRef.componentType.name;
        } else {
            // create flat json
            this.MasterJSON.components = _.merge(this.MasterJSON.components, {[key]: componentRef});
            this.MasterJSON.components[key].instance.properties.key = key;
            this.MasterJSON.components[key].instance.properties.order = index;
            this.MasterJSON.components[key].instance.properties.parent = parent;
            this.MasterJSON.components[key].instance.properties.componentName = componentRef.componentType.name;
            // copy to container component array
            this.MasterJSON.components[parent].instance.properties.components[index] = this.MasterJSON.components[key].instance.properties;
        }

    }

    removeComponent(key) {
        // tslint:disable-next-line:forin
        const parent = this.MasterJSON.components[key].instance.properties.parent;
        if (this.MasterJSON.components[key] !== undefined) {
            // tslint:disable-next-line:forin
            for (const comp in this.MasterJSON.components) {
                const parentID = this.MasterJSON.components[comp].instance.properties.parent;
                if (parentID === key) {
                   const indexToDelete =  this.MasterJSON.components[comp].instance.properties.order;
                     _.unset(this.MasterJSON.components, comp);
                    this.MasterJSON.components[parentID].instance.properties.components.splice(indexToDelete, 1);
                 }
            }
            const parentID = this.MasterJSON.components[key].instance.properties.parent;
            const indexToDelete =  this.MasterJSON.components[key].instance.properties.order;
            if (parentID === 'root_drop') {
            _.unset(this.MasterJSON.components, key);
            } else {
                _.unset(this.MasterJSON.components, key);
            this.MasterJSON.components[parentID].instance.properties.components.splice(indexToDelete, 1);
            }
            // tslint:disable-next-line:forin
            for (const comp in this.MasterJSON.components) {
                const parentID = this.MasterJSON.components[comp].instance.properties.parent;
                if (this.MasterJSON.components[parentID] === undefined && parentID !== 'root_drop') {
                    _.unset(this.MasterJSON.components, comp);
                }
            }
        } else if (this.MasterJSON.buttons[key] !== undefined) {
            _.unset(this.MasterJSON.buttons, key);
        }
        this.updateMasterJSON(document.querySelector(`#${parent}`));
    }

    updateMasterJSON(parent) {
        console.log(this.MasterJSON);
        console.log('update', parent.children);
        for (let i = 0; i < parent.children.length; i++) {
           const childKey = parent.children[i].generatedKey;
           const parentKey = parent.children[i].parentComponent;
           console.log('child', childKey, 'parent', parentKey);
           this.MasterJSON.components[childKey].instance.properties.order = i;
           this.MasterJSON.components[childKey].instance.properties.parent = parentKey;
           // cases for moving and dropping from 1 container to another
           // internal within fst - change original component order/parent and move in fst array
           // fst to fst - change original component order/parent and move in fst array, delete from original fst array
           // root to fst- change
           // fst to root
           // root to button
           // button to root
           // fst to button
           // button to fst
        }
    }

    buildFinalJSON() {
         const finalJSON = {
            ...this.MasterJSON
        };
       let tempComponents = [];
    //    let tempNestedComponents = [];
        for (const key in this.MasterJSON.components) {
            if (this.MasterJSON.components[key].instance.properties.parent === 'root_drop') {
                const index = this.MasterJSON.components[key].instance.properties.order;
                tempComponents[index] = this.MasterJSON.components[key].instance.properties;
            }
        }
        finalJSON.components = tempComponents;
        tempComponents = [];
        for (const key in this.MasterJSON.buttons) {
            if (key) {
                const index = this.MasterJSON.buttons[key].instance.properties.order;
                tempComponents[index] = this.MasterJSON.buttons[key].instance.properties;
            }
        }
        finalJSON.buttons = tempComponents;
        this.finalJSON = finalJSON;
    }

    getFinalJSON() {
      return this.finalJSON;
    }
}
