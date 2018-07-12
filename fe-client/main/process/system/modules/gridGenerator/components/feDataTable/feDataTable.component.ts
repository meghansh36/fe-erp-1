import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { FeDataTableService } from '@L1Process/system/modules/gridGenerator/services/feDataTable.service';
//import { DataTable } from '@L1Process/system/modules/gridGenerator/models/data-table.interface';
import { DataTable } from '../../models/data-table.interface';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/do';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

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

  constructor(private dataTableService: FeDataTableService, private modalService: NgbModal) { }

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

}
