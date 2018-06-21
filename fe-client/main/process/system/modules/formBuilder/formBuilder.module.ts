import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormDragComponent } from '@L3Process/system/modules/formBuilder/components/formDrag/formDrag.component';
import { FormBuilderService } from '@L3Process/system/modules/formBuilder/services/formBuilder.service';
import { DndModule } from 'ng2-dnd';
import { FormBuilderComponent } from '@L3Process/system/modules/formBuilder/formBuilder.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    FormBuilderComponent,
    FormDragComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    DndModule.forRoot()
  ],
  providers: [FormBuilderService],
  bootstrap: [FormBuilderComponent]
})
export class FeFormBuilderModule { }
