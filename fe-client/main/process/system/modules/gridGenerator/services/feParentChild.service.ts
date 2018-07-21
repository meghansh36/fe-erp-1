import { Injectable, ErrorHandler } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class FeParentChildService {

    constructor(private http: HttpClient) { }
    protected data = [];
    protected lovCodes = [];

    storeValueOfChild(code: string, val: string) {
        this.data = this.data.filter((ele) => ele.code != code);
        this.data.push({ code: code, val: val });
        console.log(this.data);
    }

    getChild(val: any) {
        let temp = this.data.find((obj) => obj.code == val);
        return temp;
    }

    setLovCode(lov: any) {
        lov.forEach((ele) => {
            this.lovCodes.push({ code: ele.code, label: ele.meaning });
        })
        console.log(this.lovCodes);
    }

    getLovCode(label: string) {
        let temp = this.lovCodes.find((obj) => obj.label == label);
        return temp;
    }
}
