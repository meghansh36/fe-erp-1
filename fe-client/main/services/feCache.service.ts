import { Injectable, ErrorHandler } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class FeCacheService {

    constructor(private http: HttpClient) { }
    protected stack = [];

    setStackData(data: any, value: string) {
        this.stack.push({ [value]: data });
    }

    getDataFromStack(id: any) {
        let temp = this.stack.find((obj) => Object.keys(obj) == id)
        return temp;
    }

}
