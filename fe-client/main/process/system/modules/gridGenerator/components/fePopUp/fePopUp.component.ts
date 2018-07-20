import { Component, OnInit, ViewChild, Input, Output, EventEmitter, ElementRef, TemplateRef, Renderer2 } from '@angular/core';
import { FeDependentService } from '@L1Process/system/modules/gridGenerator/services/feDependentData.service';
import { NgbModal, ModalDismissReasons, NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'fe-popUp',
	styleUrls: ['fePopUp.component.css'],
	templateUrl: 'fePopUp.component.html'
})
export class FePopUpComponent implements OnInit {
	@ViewChild('d1') d1: ElementRef;
	@ViewChild('d2') d2: ElementRef;
	@Input() filteredCol: any;
	@Input() modify: any;
	@Input() value: any;
	@Output() close: EventEmitter<any> = new EventEmitter<any>();
	@Output() filterString: EventEmitter<any> = new EventEmitter<any>();
	protected _filter: string;
	protected _operators = ['Greater', 'Equals', 'Exclude'];
	protected _operator: string;
	protected _childItem: any;
	protected _dependentData: any;
	protected _childElement: any;
	protected children: any;
	protected _dependentField = [];
	protected _depVal = [];
	protected _depKeys = [];

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

	get isParent() {
		if (this.filteredCol.isParent) {
			return this.filteredCol.isParent;
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

	get childItem() {
		return this._childItem;
	}

	set childItem(childItem) {
		this._childItem = childItem;
	}

	get dependentData() {
		return this._dependentData;
	}

	set dependentData(dependentData) {
		this._dependentData = dependentData
	}

	get childElement() {
		return this._childElement;
	}

	set childElement(childElement) {
		this._childElement = childElement;
	}

	get dependentField() {
		return this._dependentField;
	}
	get childrenLen() {
		return this.filteredCol.children;
	}

	set childrenLen(len) {
		this.filteredCol.children = len;
	}

	set dependentField(dependentField) {
		this._dependentField = dependentField;
	}

	constructor(public dependent: FeDependentService, public render: Renderer2) { }

	ngOnInit() {
		this.filter = this.value;
		this.operator = 'Contains';
	}

	selectItem(event: any, element?: any) {
		if (element == undefined) {
			if (this.isParent == 'Y') {
				this.filter = event.target.value;
				this.children = this.dependent.getChild(this.filter);
				this.createChildren();
			}
			else {
				this.filter = event.target.value;
			}
		}
		else {
			if (element.isParent == 'Y') {
				if (this.childrenLen == 0 || this.modify == 'true') {
					let obj = {
						[element.flexiLabel]: {
							operator: this.operator,
							value: event.target.value
						}
					}
					this.dependentField.push(obj);
					this.children = this.dependent.getChild(this.filter);
					this.createChildren();
					this.childrenLen = 1;
				}
			}
			else {
				if (this.childrenLen == 0 || this.modify == 'true') {
					let flexi = element[0]['flexiLabel'];
					let obj = {
						[flexi]: {
							operator: this.operator,
							value: event.target.value
						}
					}
					console.log(obj);
					this._depVal.push(obj[flexi].value);
					this._depKeys.push(flexi);
					console.log(this._depKeys);
					console.log(this._depVal);
					this.dependentField.push(obj);
				}
			}
		}
	}

	createChildren() {
		this.children.forEach((ele, i) => {
			this.createChild(ele, i);
		})
	}

	createChild(element: any, index) {
		let containerId = element.code + '_' + index;
		const childHtml = this.dependent.getFieldHtml(element.type, element);
		let childContainer = document.querySelector(`#${containerId}`);
		if (!childContainer) {
			const container = `<div id='${containerId}' >${childHtml}</div>`
			this.d2.nativeElement.insertAdjacentHTML('beforeend', container);
		} else {
			childContainer.innerHTML = childHtml;
		}
		let fieldRef = document.querySelector(`#child_${element.code}`);
		fieldRef.addEventListener('change', this.selectItemsForChildField.bind(this, [element]))
	}

	selectItemsForChildField(element: any, event: any) {
		this.selectItem(event, element);
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
			dependentFilter: this.dependentField,
			dependentValues: this._depVal,
			dependentKeys: this._depKeys,
			operator: this.operator,
			checked: false,
			code: this.id,
			type: this.type,
			label: this.label,
			lov: this.lov,
			flexiLabel: this.flexiLabel,
			isParent: this.isParent,
			children: this.childrenLen
		}
		console.log(obj);
		this.filterString.emit(obj);
	}

}
