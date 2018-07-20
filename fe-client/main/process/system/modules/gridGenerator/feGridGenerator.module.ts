import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { DataTableComponent } from '@L3Process/system/modules/gridGenerator/components/DataTable/DataTable.component';
import { PopUpComponent } from '@L3Process/system/modules/gridGenerator/components/PopUp/PopUp.component';
import { ChipComponent } from '@L3Process/system/modules/gridGenerator/components/Chip/Chip.component';

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
    PopUpComponent,
    ChipComponent
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class FeGridGeneratorModule { }
