import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { FeDataTableComponent } from '@L1Process/system/modules/gridGenerator/components/feDataTable/feDataTable.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgbModule,
    NgxDatatableModule
  ],
  exports: [FeDataTableComponent],
  declarations: [
    FeDataTableComponent
  ]
})
export class FeGridGeneratorModule { }
