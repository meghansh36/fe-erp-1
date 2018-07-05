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
       // const DOMArray = document.querySelectorAll('.fieldcomponent');
        component.parent = parent;
        component.order = index;
        this.MasterJSON.components = _.merge(this.MasterJSON.components, {[key]: component});
    }

    removeComponent(key) {
        _.unset(this.MasterJSON.components, key);
        /* for (var i = 0; i < this.DOMComponentArray.length; i++) {
            if (this.DOMComponentArray[i].generatedKey === key) {
                break;
            }
        }

        this.DOMComponentArray.splice(i, 1); */
    }

    // setDOMComponentArray(array) {
    //     this.DOMComponentArray = array;
    // }

    updateMasterJSON(index, key, parentKey) {
        console.log(key, this.MasterJSON);
        this.MasterJSON.components[key].order = index;
        this.MasterJSON.components[key].parent = parentKey;
    }

    buildFinalJSON() {
         const finalJSON = {
            ...this.MasterJSON
        };


      // this.DOMComponentArray = document.querySelectorAll('.fieldcomponent');
       const tempComponents = [];
        for (const key in this.MasterJSON.components) {
            if (key) {
                tempComponents.push(this.MasterJSON.components[key].instance.properties);
                tempComponents[tempComponents.length - 1].key = key;
                tempComponents[tempComponents.length - 1].parent = this.MasterJSON.components[key].parent;
                tempComponents[tempComponents.length - 1].order = this.MasterJSON.components[key].order;
            }
        }

        // for (let i = 0; i < this.DOMComponentArray.length; i++) {
        //     const key = this.DOMComponentArray[i].generatedKey;
        //     tempComponents.push(this.MasterJSON.components[key].instance.properties);
        // }

        finalJSON.components = tempComponents;
        this.finalJSON = finalJSON; 
    }

    getFinalJSON() {
      return this.finalJSON;
    }
}
