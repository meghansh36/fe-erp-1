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
			{ icon: "md-get_app", clickEvent: "download", customCssClass: 'gray_clr mr_10 pointer' },
		],
		columns: [
			{ prop: "username", name: "Username", sortable: true, resizeable: true, width: '100', frozenLeft: true },
			{ prop: "email", name: "Email", sortable: true, resizeable: true, width: '200', align: 'left' },
			{ prop: "name", name: "Name", sortable: true, resizeable: false, width: '200', align: 'left' },
			{ prop: "country", name: "Country", sortable: true, resizeable: true, width: '200' },
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
				type: "TXT", code: "FLD0001001", flexiLabel: "email", label: "Email"
			},
			{
				type: "TXT", code: "FLD0001002", flexiLabel: "name", label: "Name"
			},
			{
				type: "SEL", code: "FLD0001004", flexiLabel: "country", label: "Country", lov: [{
					'code': 'IND',
					'meaning': 'India',
					'tip': 'India',
				}, {
					'code': 'USA',
					'meaning': 'USA',
					'tip': 'USA'
				}],
				isParent: 'Y',
				children: []
			}
		]
	}

	fetch() {
		return this.http.get('https://raw.githubusercontent.com/Dhruv1996oct1/dodo_wisdom/2f9777ffb54fa2afa86a80e3e0cc0db85bd43924/data.json')
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
