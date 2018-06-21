import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormDragComponent } from '@L3Process/system/modules/formBuilder/components/formDrag/formDrag.component';
import { FormBuilderService } from '@L3Process/system/modules/formBuilder/services/formBuilder.service';
import { DndModule } from 'ng2-dnd';
import { FormBuilderComponent } from '@L3Process/system/modules/formBuilder/formBuilder.component';
import { FormBuilderRoutes } from "@L3Process/system/modules/formBuilder/formBuilder.routing"
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    FormBuilderComponent,
    FormDragComponent
  ],
  imports: [
    CommonModule,
    NgbModule.forRoot(),
    DndModule.forRoot(),
    FormBuilderRoutes
  ],
  providers: [FormBuilderService],
  bootstrap: [FormBuilderComponent]
})
export class FeFormBuilderModule { }
