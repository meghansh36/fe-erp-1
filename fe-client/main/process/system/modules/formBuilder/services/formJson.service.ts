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
    DOMComponentArray = [];

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
        for (var i = 0; i < this.DOMComponentArray.length; i++) {
            if (this.DOMComponentArray[i].generatedKey === key) {
                break;
            }
        }

        this.DOMComponentArray.splice(i, 1);
    }

    setDOMComponentArray(array) {
        this.DOMComponentArray = _.slice(array, 0, array.length);
    }

    buildFinalJSON() {
        const finalJSON = {
            ...this.MasterJSON
        };


       console.log(this.DOMComponentArray);
        const tempComponents = [];
        // for (const key in this.MasterJSON.components) {
        //     if (key) {
        //         tempComponents.push(this.MasterJSON.components[key].instance.properties);
        //     }
        // }

        for (let i = 0; i < this.DOMComponentArray.length; i++) {
            const key = this.DOMComponentArray[i].generatedKey;
            tempComponents.push(this.MasterJSON.components[key].instance.properties);
        }

        finalJSON.components = tempComponents;
        this.finalJSON = finalJSON;
    }

    getFinalJSON() {
      return this.finalJSON;
    }
}
