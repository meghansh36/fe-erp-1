import { Injectable, ErrorHandler } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { SearchData } from '../models/filteredData.class';

@Injectable({
    providedIn: 'root'
})
export class FeFilteredDataService {

    constructor(private http: HttpClient) { }

    sendFilterOption(object: any) {
        console.log(object);
    }

}
