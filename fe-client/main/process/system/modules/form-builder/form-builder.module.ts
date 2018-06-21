import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FeFormDragComponent } from './components/form-drag/form-drag.component';
import { FeFormBuilderService } from './services/form-builder.service';
import { FeFormBuilderComponent } from './form-builder.component';
import { DndModule } from 'ng2-dnd';


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
