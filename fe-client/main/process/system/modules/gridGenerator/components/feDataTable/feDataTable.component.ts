import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { DataTableService } from '@L3Process/system/modules/gridGenerator/services/DataTable.service';
import { DataTable } from '@L1Process/system/modules/gridGenerator/models/data-table.interface';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/do';
import { NgbModal, ModalDismissReasons, NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'fe-dataTable',
  styleUrls: ['feDataTable.component.css'],
  templateUrl: 'feDataTable.component.html',
  encapsulation: ViewEncapsulation.None
})
export class FeDataTableComponent implements OnInit {

  @ViewChild(DatatableComponent) table: DatatableComponent;

  private temp = [];
  private allColumns = [];
  private _pageHide: boolean;
  private _limitShow: boolean;
  private selected = [];
  private _checkboxable: boolean;
  private _headerCheckboxable: boolean;

  get rows() {
    return this.table.rows;
  }

  set rows(rows) {
    this.table.rows = rows;
  }

  get limit() {
    return this.table.limit;
  }

  set limit(limit) {
    this.table.limit = limit;
  }

  get columns() {
    return this.table.columns;
  }

  set columns(column) {
    this.table.columns = column;
  }

  get rowHeight() {
    return this.table.rowHeight;
  }

  set rowHeight(rowHeight) {
    this.table.rowHeight = rowHeight;
  }

  get scrollbarH() {
    return this.table.scrollbarH;
  }

  set scrollbarH(scrollbarH) {
    this.table.scrollbarH = scrollbarH;
  }

  get headerHeight() {
    return this.table.headerHeight;
  }

  set headerHeight(headerHeight) {
    this.table.headerHeight = headerHeight
  }

  get offset() {
    return this.table.offset;
  }

  set offset(offset) {
    this.table.offset = offset;
  }

  get footerHeight() {
    return this.table.footerHeight;
  }

  set footerHeight(footerHeight) {
    this.table.footerHeight = footerHeight;
  }

  get pager() {
    return this._pageHide;
  }

  set pager(pager) {
    this._pageHide = pager;
  }

  get limitShow() {
    return this._limitShow;
  }

  set limitShow(limitShow) {
    this._limitShow = limitShow;
  }

  get pagerShowHideCondition() {
    if (((this.table.rowCount / this.table.pageSize) > 1) && this.pager) {
      return false;
    }
    else return true;
  }

  get selectionType() {
    return this.table.selectionType;
  }

  set selectionType(selectionType) {
    this.table.selectionType = selectionType;
  }

  get selectAllRowsOnPage() {
    return this.table.selectAllRowsOnPage;
  }

  set selectAllRowsOnPage(selectAllRowsOnPage) {
    this.table.selectAllRowsOnPage = selectAllRowsOnPage;
  }

  get checkboxable() {
    return this._checkboxable;
  }

  set checkboxable(checkboxable) {
    this._checkboxable = checkboxable
  }

  get headerCheckboxable() {
    return this._headerCheckboxable;
  }

  set headerCheckboxable(headerCheckboxable) {
    this._headerCheckboxable = headerCheckboxable;
  }

  constructor(private dataTableService: DataTableService, private modalService: NgbModal, private config: NgbDropdownConfig) {
    config.autoClose = false;
  }

  ngOnInit() {
    let gridData = this.dataTableService.getColumn();
    this.setGrid(gridData);
    let rowData = this.dataTableService.fetch();
    this.setRows(rowData);
  }

  setGrid(gridData) {
    for (var key in gridData) {
      if (key == 'columns') {
        this.columns = this.allColumns = gridData[key];
      }
      if (key == 'limit') {
        this.limit = gridData[key];
      }
      if (key == 'footerHeight') {
        this.footerHeight = gridData[key];
      }
      if (key == 'offset') {
        this.offset = gridData[key];
      }
      if (key == 'headerHeight') {
        this.headerHeight = gridData[key];
      }
      if (key == 'scrollbarH') {
        this.scrollbarH = gridData[key];
      }
      if (key == 'rowHeight') {
        this.rowHeight = gridData[key];
      }
      if (key == 'pager') {
        this.pager = gridData[key];
      }
      if (key == 'limitShow') {
        this.limitShow = gridData[key];
      }
      if (key == 'selectionType') {
        this.selectionType = gridData[key];
      }
      if (key == 'selectAllRowsOnPage') {
        this.selectAllRowsOnPage = gridData[key];
      }
      if (key == 'checkboxable') {
        this.checkboxable = gridData[key];
      }
      if (key == 'headerCheckboxable') {
        this.headerCheckboxable = gridData[key];
      }
    }
  }

  setRows(rowData: Observable<DataTable[]>) {
    rowData.subscribe((ele: DataTable[]) => {
      this.rows = [...ele];
      this.temp = [...ele];
    });
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    const temp = this.temp.filter(function (d) {
      return d.username.toLowerCase().indexOf(val) !== -1 || !val;
    });
    this.rows = temp;
  }

  toggle(col) {
    const isChecked = this.isChecked(col);

    if (isChecked) {
      this.columns = this.columns.filter(c => {
        return c.name !== col.name;
      });
    } else {
      this.columns = [...this.columns, col];
    }
  }

  isChecked(col) {
    return this.columns.find(c => {
      return c.name === col.name;
    });
  }

  openModal(content) {
    this.modalService.open(content, { centered: true });
  }

  getLimitedData(event) {
    let limit = event.target.value;
    let pageNumber = this.offset;
    let prevLimit = this.limit;
    this.dataTableService.fetchLimitData(limit, pageNumber, prevLimit);
  }

  onSelect({ selected }) {
    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
  }

  add() {
    this.selected.push(this.rows[1], this.rows[3]);
  }

  update() {
    this.selected = [this.rows[1], this.rows[3]];
  }

  remove() {
    this.selected = [];
  }

}
