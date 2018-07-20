import { Component, OnInit, ViewChild, Input, Output, EventEmitter, ElementRef, TemplateRef, Renderer2, AfterViewInit } from '@angular/core';
import { FeDependentService } from '@L1Process/system/modules/gridGenerator/services/feDependentData.service';
import { NgbModal, ModalDismissReasons, NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'fe-popUp',
	styleUrls: ['fePopUp.component.css'],
	templateUrl: 'fePopUp.component.html'
})
export class FePopUpComponent implements OnInit {
	@ViewChild('TxtTag') TxtTag: ElementRef;
	@ViewChild('SelTag') SelTag: ElementRef;
	@ViewChild('tag') tag: ElementRef;
	@Input() filteredCol: any;
	@Input() modify: any;
	@Input() value: any;
	@Input() operator: any;
	@Output() close: EventEmitter<any> = new EventEmitter<any>();
	@Output() filterString: EventEmitter<any> = new EventEmitter<any>();
	protected _filter: string;
	protected selectedValue: string;
	protected operatorValue: string;
	protected _operators = ['contains', 'greater', 'equals', 'exclude'];
	protected _operator: string;
	protected _childItem: any;
	protected _dependentData: any;
	protected _childElement: any;
	protected children: any;
	protected _dependentField = [];
	protected _depVal = [];
	protected _depKeys = [];
	protected element: any;
	protected _currentDependentNotInNext = [];
	protected _childOperatorAndValue = [];
	protected childMeaning: string;
	protected filterValue: string;

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

	get dependentValues() {
		return this._depVal;
	}

	set dependentValues(dependentValue) {
		this._depVal = dependentValue
	}

	get dependentKeys() {
		return this._depKeys;
	}

	set dependentKeys(dependentKeys) {
		this._depKeys = dependentKeys;
	}

	get currentDependentNotInNext() {
		return this.filteredCol.currentDependentNotInNext;
	}

	set currentDependentNotInNext(currentDependentNotInNext) {
		this.filteredCol.currentDependentNotInNext = currentDependentNotInNext;
	}

	get childOperatorAndValue() {
		return this._childOperatorAndValue;
	}

	set childOperatorAndValue(childOperators) {
		this._childOperatorAndValue = childOperators
	}

	constructor(public dependent: FeDependentService, public render: Renderer2) { }

	ngOnInit() {
		this.filter = this.selectedValue = this.value;
		this.operatorValue = this.operator;
		//this._childOperator = 'equals';
	}

	selectItem(event: any, element?: any) {
		if (event.target.value) {
			if (element == undefined) {
				if (this.isParent == 'Y') {
					let label = this.lov.filter((ele) => ele.code == event.target.value);
					this.filterValue = event.target.value;
					this.filter = label[0].meaning;
					this.children = this.dependent.getChild(this.filterValue);
					this.createChildren();
				}
				else {
					let label = this.lov.filter((ele) => ele.code == event.target.value);
					this.filter = label[0].meaning;
				}
			}
			else {
				this.element = element;
				if (element.isParent == 'Y') {
					this.createObject(event, element);
					this.children = this.dependent.getChild(this.filter);
					this.createChildren();
				}
				else {
					this.createObject(event, element);
				}
			}
		}
		else {
			this.checkToRemoveChildField(element);
		}
	}

	createObject(event: any, element: any) {
		let flexi = element[0]['flexiLabel'];
		let label = this.element[0].lov.filter((ele) => ele.code == event.target.value);
		this.childMeaning = label[0].meaning;
		let obj = {
			operator: this.operatorValue,
			value: event.target.value,
			label: this.childMeaning,
			flexi: flexi
		}
		this.repeatedValsRemove(flexi);
		this.dependentValues.push(this.childMeaning);
		this.dependentKeys.push(flexi);
		this.dependentField.push(obj);
	}

	checkToRemoveChildField(element: any) {
		if (this.element) {
			let fieldRef = document.querySelector(`#child_${this.element[0].code}`);
			let oprRef = document.querySelector(`#OPR_${this.element[0].code}`);
			let labRef = document.querySelector(`#LAB_${this.element[0].code}`);
			console.log(fieldRef);
			this.removeFieldAndCurrentData();
			this.filter = null;
			fieldRef.remove();
			oprRef.remove();
			labRef.remove();
		}
		else {
			this.removeFieldAndCurrentData();
			this.filter = null;
		}
	}

	removeFieldAndCurrentData() {
		this.dependentField.length = 0;
	}

	repeatedValsRemove(flexi: any) {
		this.dependentValues.length = 0;
		this.dependentKeys = this.dependentKeys.filter((ele) => ele != flexi);
		this.dependentField = this.dependentField.filter((ele) => ele.flexi != flexi);
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
			const container = `<div class="flex" id='${containerId}' >${childHtml}</div>`
			this.tag.nativeElement.insertAdjacentHTML('beforeend', container);
		} else {
			childContainer.innerHTML = childHtml;
		}
		let fieldRef = document.querySelector(`#child_${element.code}`);
		let oprFieldRef = document.querySelector(`#OPR_${element.code}`);
		fieldRef.addEventListener('change', this.selectItemsForChildField.bind(this, [element]));
		if (this.type == "SEL") {
			this.selectOperatorForChild(element);
		}
		else {
			oprFieldRef.addEventListener('change', this.selectOperatorForChild.bind(this, [element]));
		}
	}

	selectItemsForChildField(element: any, event: any) {
		this.selectItem(event, element);
	}

	selectOperatorForChild(element: any, event?: any) {
		let obj = this.getTargetValuesForFilter(element, event);
		/* let obj = {
			[this.type]: event.target.value
		} */
		this.childOperatorAndValue.push(obj);
		console.log(this.childOperatorAndValue);
	}

	getTargetValuesForFilter(element: any, event: any) {
		let obj;
		if (this.type == "SEL") {
			obj = {
				[this.type]: 'equals'
			}
		}
		else {
			obj = {
				[this.type]: event.target.value
			}
		}

		return obj;
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
			filterValue: this.filterValue,
			dependentFilter: this.dependentField,
			dependentValues: this.dependentValues,
			dependentKeys: this.dependentKeys,
			operator: this.operator,
			checked: false,
			code: this.id,
			type: this.type,
			label: this.label,
			lov: this.lov,
			flexiLabel: this.flexiLabel,
			isParent: this.isParent,
			children: this.childrenLen,
			currentDependentNotInNext: this._currentDependentNotInNext,
			childOperators: this.childOperatorAndValue,
			childMeaning: this.childMeaning
		}
		this.filterString.emit(obj);
	}

}
