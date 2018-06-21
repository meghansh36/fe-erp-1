import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FeFormDragComponent } from './components/formDrag/formDrag.component';
import { FeFormBuilderService } from './services/formBuilder.service';
import { FeFormBuilderComponent } from './formBuilder.component';
import { DndModule } from 'ng2-dnd';
import { FormBuilderComponent } from '@L3Process/system/modules/formBuilder/formBuilder.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    FeFormBuilderComponent,
    FeFormDragComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    DndModule.forRoot()
  ],
  providers: [FeFormBuilderService],
  bootstrap: [FeFormBuilderComponent]
})
export class FeFormBuilderModule { }
