import { Injectable, Renderer2 } from '@angular/core';
import { DefaultsService } from '@L3Process/system/services/Defaults.service';

@Injectable({
    providedIn: 'root'
})
export class FeUtilityService {
   public renderer: Renderer2;//initialized from field components
    constructor( public defaults: DefaultsService ) {

    }

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

    getFieldClasses( fieldComponent ) {
        const type = fieldComponent.type;
        let labelPosition = this.defaults.LABEL_POSITION;
        const customCssClass = fieldComponent.customCssClass || '';

        if (!fieldComponent.hideLabel && fieldComponent.labelPosition) {
            labelPosition = fieldComponent.labelPosition;
        }

        let fieldContainerClasses = {};
        let classesStr = `form-field-container frm-fld-container ${type}-container`;
        if (fieldComponent.prefix || fieldComponent.suffix) {
            classesStr += ' input-group';
        }
        fieldContainerClasses = this._makeCssClassesObj(classesStr);

        let fieldMainWrapperClasses = {};
        classesStr = `fe-field ${type}-container form-group ${labelPosition}-labeled-field`;
        if (fieldComponent.hidden) {
            classesStr += ' hidden';
        }
        fieldMainWrapperClasses = this._makeCssClassesObj(classesStr);

        let fieldLabelContainerClasses = {};
        classesStr = `fe-field-container field-label-container ${type}-label-container`;
        if (fieldComponent.hideLabel) {
            classesStr += ' hidden';
        }
        if (fieldComponent.hasTextLenghtLimit) {
            classesStr += ' has-text-limit';
        }
        fieldLabelContainerClasses = this._makeCssClassesObj(classesStr);

        let fieldWrapperClasses = {};
        classesStr = `field-wrapper ${type}-field-wrapper field-label-${labelPosition}`;
        fieldWrapperClasses = this._makeCssClassesObj(classesStr);

        let fieldDescWrapperClasses = {};
        classesStr = `field-desc-container ${type}-desc-cont`;
        fieldDescWrapperClasses = this._makeCssClassesObj(classesStr);

        let fieldDescContainerClasses = {};
        classesStr = `form-text text-muted field-desc ${type}-desc`;
        fieldDescContainerClasses = this._makeCssClassesObj(classesStr);

        let labelClasses = {};
        classesStr = `field-label ${type}-label`;
        if (fieldComponent.isMandatory) {
            classesStr += ` mandatory-field-label`;
        }
        labelClasses = this._makeCssClassesObj(classesStr);

        let fieldErrorWrapperClasses = {};
        classesStr = `field-error-wrapper ${type}-error-wrapper`;
        fieldErrorWrapperClasses = this._makeCssClassesObj(classesStr);

        let fieldClasses = {};
        classesStr = `form-field ${type}-field ${customCssClass}`;
        if (fieldComponent.isMandatory) {
            classesStr += ` mandatory-field`;
        }
        fieldClasses = this._makeCssClassesObj(classesStr);

        let nestedFieldContainerClasses = {};
        classesStr = `fe-field-container fe-${type}-wrapper`;
        nestedFieldContainerClasses = this._makeCssClassesObj(classesStr);

        let classes: any = {
            fieldMainWrapperClasses,
            fieldWrapperClasses,
            fieldLabelContainerClasses,
            fieldContainerClasses,
            fieldDescWrapperClasses,
            fieldDescContainerClasses,
            labelClasses,
            fieldErrorWrapperClasses,
            fieldClasses,
            nestedFieldContainerClasses
        };
        if ( fieldComponent.type === 'BTN' ) {
            classes = this.addButtonProps( fieldComponent, classes );
        }
        classes = fieldComponent.beforeSetDefaultClasses( classes );
        return classes;
    }

    _makeCssClassesObj(cssClassesStr: string): any {
        const cssClassesObj = {};
        const cssClassArr = cssClassesStr.trim().split(' ')
        cssClassArr.forEach((cssClass) => {
            cssClassesObj[cssClass] = true;
        });
        return cssClassesObj;
    }

    getFieldStyles( fieldComponent ) {
        const fieldLabelContainerStyle: any = {};
        const fieldMainWrapperStyle = {};

        const labelWidth = fieldComponent.labelWidth;
        const labelMargin = fieldComponent.labelMargin;

        if (labelWidth) {
            fieldLabelContainerStyle.width = `${labelWidth}px`;
        }

        let fieldWidth = this.defaults.FIELD_WIDTH;
        if (fieldComponent.width) {
            fieldWidth = fieldComponent.width;
        }
        if (fieldWidth) {
            this.renderer.setStyle(fieldComponent.elemRef.nativeElement, 'width', fieldWidth);
        }
        if (fieldComponent.type === 'HID') {
            this.renderer.addClass(fieldComponent.elemRef.nativeElement, 'hidden');
        }

        if (labelMargin) {
            const margin: string = `${labelMargin}px`;
            let marginSide: string = 'margin-top';

            switch (fieldComponent.labelPosition) {
                case 'bottom': {
                    marginSide = 'margin-top';
                    break;
                }
                case 'left': {
                    marginSide = 'margin-right';
                    break;
                }
                case 'right': {
                    marginSide = 'margin-left';
                    break;
                }
                default: {
                    marginSide = 'margin-top';
                    break;
                }
            }
            fieldLabelContainerStyle[marginSide] = margin;
        }

        if (fieldComponent.labelWidth) {
            fieldLabelContainerStyle['width'] = fieldComponent.labelWidth;
        }

        if (fieldComponent.marginLeft) {
            fieldMainWrapperStyle['margin-left'] = fieldComponent.marginLeft;
        }

        if (fieldComponent.marginRight) {
            fieldMainWrapperStyle['margin-right'] = fieldComponent.marginRight;
        }

        if (fieldComponent.marginTop) {
            fieldMainWrapperStyle['margin-top'] = fieldComponent.marginTop;
        }

        if (fieldComponent.marginBottom) {
            fieldMainWrapperStyle['margin-bottom'] = fieldComponent.marginBottom;
        }

        let inlineStyle = {
            fieldMainWrapperStyle,
            fieldWrapperStyle: {},
            fieldDescWrapperStyle: {},
            fieldDescContainerStyle: {},
            fieldLabelContainerStyle,
            fieldContainerdStyle: {},
            labelStyle: {},
            fieldStyle: {},
            nestedFieldContainerStyle: {}

        };
        inlineStyle = fieldComponent.beforeSetDefaultStyle(inlineStyle);
        return inlineStyle;
    }

    addDisplayProps( fieldComponent ) {
        if (fieldComponent.type == 'HID') {
            this.renderer.addClass(fieldComponent.elemRef.nativeElement, 'hidden');
        }
        if ( fieldComponent.disabled ) {
            fieldComponent.control.disable( { onlySelf: true, emitEvent: true } );
        }
        this.renderer.addClass(fieldComponent.elemRef.nativeElement, 'fe-field-component');
    }

    addButtonProps( fieldComponent, classesObj ) {
        const buttonThemeClasses = this.defaults.BUTTON_THEMES;
        let themeClass = buttonThemeClasses[fieldComponent.theme];
        if (!themeClass) {
          themeClass = buttonThemeClasses[this.defaults.BUTTON_THEME];
        }
        classesObj['fieldClasses'][themeClass] = true;
            const buttonSizeClasses = this.defaults.BUTTON_SIZES; 
            
        if (fieldComponent.size) {
          classesObj['fieldClasses'][buttonSizeClasses[fieldComponent.size]] = true;
        } else {
                classesObj['fieldClasses'][buttonSizeClasses[this.defaults.BUTTON_SIZE]] = true;
            }
        return classesObj;
        }
}
