import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { DataTableComponent } from '@L3Process/system/modules/gridGenerator/components/DataTable/DataTable.component';
import { FePopUpComponent } from '@L1Process/system/modules/gridGenerator/components/fePopUp/fePopUp.component';
import { FeChipComponent } from '@L1Process/system/modules/gridGenerator/components/feChip/feChip.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgbModule,
    NgxDatatableModule,
    FormsModule
  ],
  exports: [DataTableComponent],
  declarations: [
    DataTableComponent,
    FePopUpComponent,
    FeChipComponent
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class FeGridGeneratorModule { }
