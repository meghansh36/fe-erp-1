import { Component, OnInit, ViewChild, Input, Output, EventEmitter, TemplateRef, ComponentRef, ElementRef, ViewContainerRef, Renderer2 } from '@angular/core';
import { DataTableService } from '@L3Process/system/modules/gridGenerator/services/DataTable.service';
import { NgbModal, ModalDismissReasons, NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'fe-chip',
	styleUrls: ['feChip.component.css'],
	templateUrl: 'feChip.component.html'
})
export class FeChipComponent implements OnInit {
	@Input() chipData: any;
	@Output() closeChip: EventEmitter<any> = new EventEmitter<any>();
	@Output() addThisFilter: EventEmitter<any> = new EventEmitter<any>();
	protected _filteredCol: any;
	protected checked: boolean = false;
	protected _obj: any;

	get filteredCol() {
		return this._filteredCol;
	}

	set filteredCol(filteredCol) {
		this._filteredCol = filteredCol;
	}

	get filter() {
		return this.chipData.filter;
	}

	set filter(filterString) {
		this.chipData.filter = filterString;
	}

	get name() {
		return this.chipData.name;
	}

	set name(name) {
		this.chipData.name = name;
	}
	get label() {
		return this.chipData.label;
	}

	get code() {
		return this.chipData.code;
	}

	get type() {
		return this.chipData.type;
	}

	get flexiLabel() {
		return this.chipData.flexiLabel;
	}

	get lov() {
		if (this.chipData.lov) {
			return this.chipData.lov;
		}
	}
	get obj() {
		return this._obj;
	}

	set obj(obj) {
		this._obj = obj;
	}

	get operator() {
		return this.chipData.operator;
	}

	set operator(operator) {
		this.chipData.operator = operator;
	}

	ngOnInit() {
		this.obj = {
			name: this.label,
			filter: this.filter,
			operator: this.operator,
			code: this.code,
			type: this.type,
			label: this.label,
			lov: this.lov,
			flexiLabel: this.flexiLabel
		}
	}

	popUp() {
		this.checked = !this.checked;
		this.filteredCol = this.chipData;
	}
	closePopUp() {
		this.checked = !this.checked;
	}
	addFilter(event: any) {
		this.filter = event.filter;
		this.operator = event.operator
		this.obj['filter'] = this.filter;
		this.obj['operator'] = this.operator;
		this.addThisFilter.emit(this.obj);
		this.checked = !this.checked;
	}
	removeChip() {
		this.chipData.filter = undefined;
		this.closeChip.emit(this.obj);
	}
}

