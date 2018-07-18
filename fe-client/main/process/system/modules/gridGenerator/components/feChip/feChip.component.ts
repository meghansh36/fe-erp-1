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
	private _filteredCol: any;
	private checked: boolean = false;
	chipCmp: ComponentRef<FeChipComponent>;

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

	ngOnInit() {

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
		this.checked = !this.checked;
	}
	removeFilter() {
		this.closeChip.emit(this.chipData);
	}
}

