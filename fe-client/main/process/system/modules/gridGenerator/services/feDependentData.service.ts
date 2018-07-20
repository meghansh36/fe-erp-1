import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class FeDependentService {

    getHtmlSEL(element) {
        let html = `<select class="form-control" id='child_${element.code}' >`;
        const options = element.lov;
        options.forEach((ele) => {
            html += `<option value='${ele.code}'>${ele.meaning}</option>`;
        });
        html += '</select>';
        return html;
    }

    private fieldsHtml = {
        SEL: this.getHtmlSEL,
    }



    dependentDataOfparent = {
        "IND": [
            {
                "flexiLabel": "state",
                "type": "SEL",
                "code": "FLD0008170",
                "lov": [
                    {
                        "code": "102",
                        "meaning": "Ahmedabad, Gujarat",
                        "tip": "Ahmedabad, Gujarat"
                    },
                    {
                        "code": "98",
                        "meaning": "Barnala, Punjab",
                        "tip": "Barnala, Punjab"
                    },
                    {
                        "code": "97",
                        "meaning": "Chandigarh, Punjab",
                        "tip": "Chandigarh, Punjab"
                    },
                    {
                        "code": "79",
                        "meaning": "Chennai, Tamil Nadu",
                        "tip": "Chennai, Tamil Nadu"
                    },
                    {
                        "code": "77",
                        "meaning": "Delhi, Delhi",
                        "tip": "Delhi, Delhi"
                    }
                ]
            }
        ],
        "USA": [
            {
                "flexiLabel": "state",
                "type": "SEL",
                "code": "FLD0008170",
                "lov": [
                    {
                        "code": "102",
                        "meaning": "Canada",
                        "tip": "Canada"
                    },
                    {
                        "code": "91",
                        "meaning": "Florida",
                        "tip": "Florida"
                    },
                    {
                        "code": "127",
                        "meaning": "Washington",
                        "tip": "Washington"
                    }
                ]
            }
        ]
    }

    getChild(value) {
        return this.dependentDataOfparent[value];
    }

    getFieldHtml(type, element) {
        if (this.fieldsHtml[type]) {
            return this.fieldsHtml[type](element);
        }
    }

    dependentData(value) {
        return this.dependentDataOfparent[value];
    }
}
