import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { DataTableComponent } from '@L3Process/system/modules/gridGenerator/components/DataTable/DataTable.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgbModule,
    NgxDatatableModule
  ],
  exports: [DataTableComponent],
  declarations: [
    DataTableComponent
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class FeGridGeneratorModule { }
