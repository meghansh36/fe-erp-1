import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormDragComponent } from '@L3Process/system/modules/formBuilder/components/formDrag/formDrag.component';
import { FormBuilderService } from '@L3Process/system/modules/formBuilder/services/formBuilder.service';
import { FormMasterService } from '@L3Process/system/modules/formBuilder/services/formMaster.service';
import { DndModule } from 'ng2-dnd';
import { FormBuilderComponent } from '@L3Process/system/modules/formBuilder/formBuilder.component';
import { FormBuilderRoutes } from "@L3Process/system/modules/formBuilder/formBuilder.routing"
import { CommonModule } from '@angular/common';
import { MasterFormComponent } from '@L3Process/system/modules/formBuilder/components/Master/masterForm.component';

@NgModule({
  declarations: [
    FormBuilderComponent,
    FormDragComponent,
    MasterFormComponent
  ],
  imports: [
    CommonModule,
    NgbModule.forRoot(),
    DndModule.forRoot(),
    FormBuilderRoutes
  ],
  providers: [FormBuilderService, FormMasterService],
  bootstrap: [FormBuilderComponent]
})
export class FeFormBuilderModule { }
