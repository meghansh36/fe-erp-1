import { Injectable, ErrorHandler } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { DataTable } from '@L1Process/system/modules/gridGenerator/models/data-table.interface';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { DataTable } from '../models/data-table.interface';

@Injectable({
    providedIn: 'root'
})
export class FeDataTableService {

    constructor(private http: HttpClient) { }

    private data: any;
    private handleError: ErrorHandler;

    private column = {
        rowHeight: "100",
        scrollbarH: true,
        headerHeight: "50",
        limit: "3",
        offset: "0",
        footerHeight: '50',
        pager: false,
        limitShow: false,
        columns: [
            { prop: "username", name: "username", sortable: true, frozenLeft: true },
            { prop: "email", name: "email", sortable: true },
            { prop: "country", name: "country", sortable: true, resizeable: false },
            { prop: "state", name: "state", sortable: true },
            { prop: "date", name: "date", sortable: false, width: '200' }
        ]
    }

    fetch() {
        return this.http.get('https://raw.githubusercontent.com/Dhruv1996oct1/dodo_wisdom/master/data.json')
            .pipe(
                map(data => data['key'])
            );
    }

    fetchLimitData(limit, pageNumber, prevLimit) {
        this.http.post('/api/fetchLimitData', { 'limit': limit, 'pageNumber': pageNumber, 'prevLimit': prevLimit }).subscribe((res) => {
            console.log(res);
        }, (err) => {
            console.log(err);
        })
    }

    getColumn() {
        return this.column;
    }
}
