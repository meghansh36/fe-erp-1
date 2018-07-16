import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class FeUtilityService {
   
    evalFnArgs(argsStr) {
        try {
            const evaluatedArgsArr = [];
            argsStr = argsStr.trim().split(',');
            argsStr.forEach((value) => {
                value = value.trim();
                const evalStr = eval(value);
                evaluatedArgsArr.push(evalStr);
            });
            return evaluatedArgsArr;
        } catch (error) {
            console.log(error);
        }
    }

    fieldEventHandler(eventName, handlerData, fieldComponent, event) {
        try {
            let handlerOwnerType = handlerData.handlerOwner;
            const handlerFnName = handlerData.handlerName;
            const args = handlerData.args;
            let ownerObject: any = {};
            if (!handlerOwnerType || handlerOwnerType == 'form' ) {
                handlerOwnerType = 'form';
            } else if ( handlerOwnerType == 'resource' ) {
                handlerOwnerType = 'resource';
            } else {
                console.log(`Handler owner type ${handlerOwnerType} is not supported.`);
                return;
            }
            ownerObject = fieldComponent[ handlerOwnerType ]; //this.resource or this.form
            if (!ownerObject) {
                console.log(`Event handler function owner ${handlerOwnerType} object does not exist in current field component object. So can not call bound function.`);
                return;
            }
            
            if (ownerObject[handlerFnName] && typeof ownerObject[handlerFnName] == 'function') {
                const argsArr = this.evalFnArgs(args);
                argsArr.push( fieldComponent );
                argsArr.push( event );
                ownerObject[handlerFnName].apply(ownerObject, argsArr)
            } else {
                console.log(`Event handler ${handlerFnName} does not exist in ${handlerOwnerType} class for event ${eventName}`);
            }

        } catch (error) {
            console.log(error);
        }
    }
}
