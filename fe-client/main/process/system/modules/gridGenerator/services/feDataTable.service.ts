import { Injectable, ErrorHandler } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataTable } from '@L1Process/system/modules/gridGenerator/models/data-table.interface';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class FeDataTableService {

	constructor(private http: HttpClient) { }

	private data: any;
	private handleError: ErrorHandler;

	private column = {
		formCode: "FRM0001001",
		rowHeight: "100",
		scrollbarH: true,
		headerHeight: "50",
		limit: "3",
		offset: "0",
		footerHeight: '50',
		pager: true,
		limitShow: true,
		selectionType: "checkbox",
		selectAllRowsOnPage: false,
		checkboxable: true,
		headerCheckboxable: true,
		filterable: true,
		editableIcon: true,
		title: "Users",
		exportToExcel: 'Y',
		subTitle: "Showing all users",
		message: {
			emptyMessage: "No Data to Show"
		},
		buttons: [
			{ icon: "md-settings", clickEvent: "dropDownOpenClose", type: 'dropdown', customCssClass: 'gray_clr mr_10 pointer' },
		],
		columns: [
			{ prop: "username", name: "Username", sortable: true, resizeable: true, width: '100', frozenLeft: true },
			{ prop: "email", name: "Email", sortable: true, resizeable: true, filterable: true, width: '200', align: 'left' },
			{ prop: "name", name: "Name", sortable: true, resizeable: false, filterable: true, width: '200', align: 'left' },
			{ prop: "state", name: "State", sortable: true, resizeable: true, width: '200' },
			{ prop: "age", name: "Age", sortable: false, resizeable: true, width: '200' }
		],
		rowActions: [
			{ icon: 'md-create', clickEvent: 'detail', handlerOwner: 'form', customCssClass: 'gray_clr mr_10 pointer' },
		],
		actionButtons: [
			{ icon: 'md-email', clickEvent: 'sendMail', handlerOwner: 'resource', customCssClass: 'gray_clr mr_10 pointer' },
			{ icon: 'md-person_add', clickEvent: 'addPerson', handlerOwner: 'resource', customCssClass: 'gray_clr mr_10 pointer' }
		],
		applicableFilters: [
			{
				type: "TXT", code: "FLD0001001", flexiLabel: "email", label: 'Email'
			},
			{
				type: "TXT", code: "FLD0001002", flexiLabel: "name", label: 'Name'
			},
			{
				type: "SEL", code: "FLD0001003", flexiLabel: "state", label: 'State', lov: ['Delhi', 'Mumbai', 'Kerela']
			}
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
