import { Component, OnInit, ViewChild, Input, Output, EventEmitter, TemplateRef, Renderer2 } from '@angular/core';
import { DataTableService } from '@L3Process/system/modules/gridGenerator/services/DataTable.service';
import { NgbModal, ModalDismissReasons, NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'fe-popUp',
	styleUrls: ['fePopUp.component.css'],
	templateUrl: 'fePopUp.component.html'
})
export class FePopUpComponent implements OnInit {
	@Input() filteredCol: any;
	@Input() value: any;
	@Output() close: EventEmitter<any> = new EventEmitter<any>();
	@Output() filterString: EventEmitter<any> = new EventEmitter<any>();
	protected _filter: string;
	protected _operators = ['Greater', 'Equals', 'Exclude'];
	protected _operator: string;

	set filter(filter) {
		this._filter = filter;
	}

	get filter() {
		return this._filter;
	}

	get label() {
		return this.filteredCol.label;
	}

	get id() {
		return this.filteredCol.code;
	}

	get type() {
		return this.filteredCol.type;
	}

	get flexiLabel() {
		return this.filteredCol.flexiLabel;
	}

	get lov() {
		if (this.filteredCol.lov) {
			return this.filteredCol.lov;
		}
	}

	get operators() {
		return this._operators;
	}

	get operator() {
		return this._operator;
	}

	set operator(operator) {
		this._operator = operator;
	}

	ngOnInit() {
		this.filter = this.value;
		this.operator = 'Contains';
	}

	selectItem(event: any) {
		this.filter = event.target.value;
	}

	selectOperator(event: any) {
		this.operator = event.target.value;
	}

	closePopUp() {
		this.close.emit(false);
	}

	applyFilter() {
		let obj = {
			name: this.label,
			filter: this.filter,
			operator: this.operator,
			checked: false,
			code: this.id,
			type: this.type,
			label: this.label,
			lov: this.lov,
			flexiLabel: this.flexiLabel
		}
		this.filterString.emit(obj);
	}

}
