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
	protected _dependentKeys: any;
	protected _depValues: any;
	protected _childOperator: any;

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

	get dependentFilter() {
		return this.chipData.dependentFilter;
	}

	set dependentFilter(dependentFilter) {
		this.chipData.dependentFilter = dependentFilter;
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

	get dependentValues() {
		return this.chipData.dependentValues;
	}


	set dependentValues(depValues) {
		this.chipData.dependentValues = depValues
	}

	get childOperators() {
		return this.chipData.childOperators;
	}

	set childOperators(childOperators) {
		this.chipData.childOperators = childOperators;
	}

	get childMeaning() {
		return this.chipData.childMeaning;
	}

	set childMeaning(childMeaning) {
		this.chipData.childMeaning = childMeaning
	}

	get dependentKeys() {
		return this.chipData.dependentKeys;
	}

	set dependentKeys(dependentKeys) {
		this.chipData.dependentKeys = dependentKeys;
	}

	get filterValue() {
		return this.chipData.filterValue;
	}

	set filterValue(filterValue) {
		this.chipData.filterValue = filterValue;
	}

	ngOnInit() {
		this.retrieveOperator();
		this.obj = {
			name: this.label,
			filter: this.filter,
			filterValue: this.filterValue,
			operator: this.operator,
			code: this.code,
			type: this.type,
			label: this.label,
			lov: this.lov,
			flexiLabel: this.flexiLabel,
			dependentFilter: this.dependentValues,
			dependentKeys: this.dependentKeys,
			childOperators: this.childOperators,
			childMeaning: this.childMeaning
		}
	}

	retrieveOperator() {
		if (this.dependentKeys.length) {
			let opr = this.childOperators.filter((ele) => Object.keys(ele) == this.type);
			this._childOperator = opr[0][this.type];
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
		this.operator = event.operator;
		this.dependentValues = event.dependentValues;
		this.dependentFilter = event.dependentFilter;
		this.dependentKeys = event.dependentKeys;
		this.childOperators = event.childOperators;
		this.filterValue = event.filterValue;
		this.childMeaning = event.childMeaning;
		this.obj['filter'] = this.filter;
		this.obj['dependentFilter'] = this.dependentFilter;
		this.obj['operator'] = this.operator;
		this.obj['dependentKeys'] = this.dependentKeys;
		this.obj['childOperators'] = this.childOperators;
		this.obj['childMeaning'] = this.childMeaning;
		this.obj['filterValue'] = this.filterValue
		this.addThisFilter.emit(this.obj);
		this.checked = !this.checked;
	}
	removeChip() {
		this.chipData.filter = undefined;
		this.closeChip.emit(this.obj);
	}
}

