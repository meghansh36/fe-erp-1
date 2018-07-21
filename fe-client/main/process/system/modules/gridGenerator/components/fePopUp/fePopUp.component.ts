import { Component, OnInit, ViewChild, Input, Output, EventEmitter, ElementRef, TemplateRef, Renderer2, AfterViewInit } from '@angular/core';
import { FeDependentService } from '@L1Process/system/modules/gridGenerator/services/feDependentData.service';
import { FeParentChildService } from '@L1Process/system/modules/gridGenerator/services/feParentChild.service';
import { NgbModal, ModalDismissReasons, NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'fe-popUp',
	styleUrls: ['fePopUp.component.css'],
	templateUrl: 'fePopUp.component.html'
})
export class FePopUpComponent implements OnInit, AfterViewInit {
	@ViewChild('TxtTag') TxtTag: ElementRef;
	@ViewChild('SelTag') SelTag: ElementRef;
	@ViewChild('tag') tag: ElementRef;
	@Input() filteredCol: any;
	@Input() columnsFiltersTobeApplied: any;
	@Input() modify: any;
	@Input() value: any;
	@Input() operator: any;
	@Output() close: EventEmitter<any> = new EventEmitter<any>();
	@Output() filterObject: EventEmitter<any> = new EventEmitter<any>();
	protected _filter: string;
	protected selectedValue: string;
	protected operatorValue: string;
	protected _operators = ['contains', 'greater', 'equals', 'exclude'];
	protected _operator: string;
	protected _dependentData: any;
	protected children: any;
	protected _dependentField = [];
	protected _depVal = [];
	protected _depKeys = [];
	protected element: any;
	protected childMeaning: string;
	protected filterValue: string;
	protected _parent: string;
	protected _child: string;
	protected Parentfield: any;
	protected _label: any;
	protected _lov: any;

	set filter(filter) {
		this._filter = filter;
	}

	get filter() {
		return this._filter;
	}

	get label() {
		return this.filteredCol.label;
	}

	set label(label) {
		this.filteredCol.label = label;
	}

	get conditionalLabel() {
		return this._label;
	}

	set conditionalLabel(conditionalLabel) {
		this._label = conditionalLabel;
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

	set flexiLabel(flexi) {
		this.filteredCol.flexiLabel = flexi;
	}

	get lov() {
		return this.filteredCol.lov;
	}

	set lov(lov) {
		this.filteredCol.lov = lov;
	}

	get conditionalLov() {
		return this._lov;
	}

	set conditionalLov(conditionalLov) {
		this._lov = conditionalLov;
	}

	get parent() {
		if (this.filteredCol.parent) {
			return this.filteredCol.parent;
		}
	}

	get child() {
		if (this.filteredCol.child) {
			return this.filteredCol.child;
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

	get dependentData() {
		return this._dependentData;
	}

	set dependentData(dependentData) {
		this._dependentData = dependentData
	}

	get dependentField() {
		return this._dependentField;
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

	constructor(public dependent: FeDependentService, public render: Renderer2, public parentChildService: FeParentChildService) { }

	ngOnInit() {
		this.filter = this.value;
		this.operatorValue = this.operator;
		this.checkForParent();
		this.checkForChildDefault();
	}
	ngAfterViewInit() {

	}

	checkForParent() {
		this.conditionalLov = this.lov;
		this.conditionalLabel = this.label;
		if (this.parent) {
			this.Parentfield = this.columnsFiltersTobeApplied.filter((ele) => ele.code == this.parent);
			setTimeout(() => {
				this.conditionalLabel = this.Parentfield[0].label;
				this.conditionalLov = this.Parentfield[0].lov;
				this.flexiLabel = this.Parentfield[0].flexiLabel;
			})
		}
	}

	checkForChildDefault() {
		if (this.parent) {
			let temp = this.parentChildService.getChild(this.parent);
			if (temp) {
				let value = this.parentChildService.getLovCode(temp.val);
				setTimeout(() => {
					this.selectedValue = value.code;
				})
			}
		}
	}

	selectItem(event: any, element?: any) {
		if (event.target.value) {
			if (element == undefined) {
				if (this.isParent == 'Y') {
					if (this.parent) {
						this._parent = this.parent;
					}
					let label = this.conditionalLov.filter((ele) => ele.code == event.target.value);
					this.filterValue = event.target.value;
					this.filter = label[0].meaning;
					this.children = this.dependent.getChild(this.filterValue);
					this.createChildren();
				}
				else {
					if (this.child) {
						this._child = this.child;
					}
					let label = this.conditionalLov.filter((ele) => ele.code == event.target.value);
					this.filter = label[0].meaning;
				}
			}
			else {
				this.element = element;
				if (element.isParent == 'Y') {
					if (element.parent) {
						this._parent = this.parent;
					}
					this.createObject(event, element);
					this.filterValue = event.target.value;
					this.children = this.dependent.getChild(this.filterValue);
					this.createChildren();
				}
				else {
					if (this.child) {
						this._child = this.child;
					}
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
		let obj = this.objectStructure(event, element);
		this.repeatedValsRemove(flexi);
		this.dependentKeys.push(flexi);
		this.dependentField.push(obj);
	}

	objectStructure(event: any, element: any) {
		let obj = {
			operator: this.selectOperatorForChild(),
			value: event.target.value,
			label: this.childMeaning,
			flexi: element[0]['flexiLabel']
		}
		return obj;
	}

	checkToRemoveChildField(element: any) {
		if (this.element) {
			let fieldRef = document.querySelector(`#child_${this.element[0].code}`);
			let oprRef = document.querySelector(`#OPR_${this.element[0].code}`);
			let labRef = document.querySelector(`#LAB_${this.element[0].code}`);
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
		this.bindEventsForFieldAndOperators(element);
	}

	bindEventsForFieldAndOperators(element: any) {
		let fieldRef = document.querySelector(`#child_${element.code}`);
		let oprFieldRef = document.querySelector(`#OPR_${element.code}`);

		fieldRef.addEventListener('change', this.selectItemsForChildField.bind(this, [element]));

		if (this.type == "SEL") {
			this.selectOperatorForChild(element);
		}
		else {
			oprFieldRef.addEventListener('change', this.selectOperatorForChild.bind(this));
		}
	}

	selectItemsForChildField(element: any, event: any) {
		this.selectItem(event, element);
	}

	selectOperatorForChild(event?: any) {
		if (this.type == "SEL") {
			return "equals";
		}
		else {
			return event.target.value;
		}
	}

	selectOperator(event: any) {
		this.operator = event.target.value;
	}

	closePopUp() {
		this.close.emit(false);
	}

	getFilterValue() {
		this.filterValue = this.filter;
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
			labelIfParent: this.conditionalLabel,
			lov: this.lov,
			flexiLabel: this.flexiLabel,
			isParent: this.isParent,
			childMeaning: this.childMeaning,
			parent: this._parent,
			child: this._child,
			columnsFiltersTobeApplied: this.columnsFiltersTobeApplied
		}
		this.filterObject.emit(obj);
	}

}
