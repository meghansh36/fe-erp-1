import { NgModule } from '@angular/core';
import { FormDragComponent } from '@L3Process/system/modules/formBuilder/components/formDrag/formDrag.component';
import { FormBuilderService } from '@L3Process/system/modules/formBuilder/services/formBuilder.service';
import { FormMasterService } from '@L3Process/system/modules/formBuilder/services/formMaster.service';
import { DndModule } from 'ng2-dnd';
import { FormBuilderComponent } from '@L3Process/system/modules/formBuilder/formBuilder.component';
import { FormBuilderRoutes } from "@L3Process/system/modules/formBuilder/formBuilder.routing"
import { CommonModule } from '@angular/common';
import { MasterFormComponent } from '@L3Process/system/modules/formBuilder/components/Master/masterForm.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TxtComponent } from '@L3Process/system/modules/formBuilder/components/formElements/txt/txt.component';
import { TxaComponent } from '@L3Process/system/modules/formBuilder/components/formElements/txa/txa.component';
import { TimComponent } from '@L3Process/system/modules/formBuilder/components/formElements/tim/tim.component';
import { PwdComponent } from '@L3Process/system/modules/formBuilder/components/formElements/pwd/pwd.component';
import { PhnComponent } from '@L3Process/system/modules/formBuilder/components/formElements/phn/phn.component';
import { NumComponent } from '@L3Process/system/modules/formBuilder/components/formElements/num/num.component';
import { MonComponent } from '@L3Process/system/modules/formBuilder/components/formElements/mon/mon.component';
import { HidComponent } from '@L3Process/system/modules/formBuilder/components/formElements/hid/hid.component';
import { EmlComponent } from '@L3Process/system/modules/formBuilder/components/formElements/eml/eml.component';
import { DtiComponent } from '@L3Process/system/modules/formBuilder/components/formElements/dti/dti.component';
import { DatComponent } from '@L3Process/system/modules/formBuilder/components/formElements/dat/dat.component';
import { CurComponent } from '@L3Process/system/modules/formBuilder/components/formElements/cur/cur.component';
import { AdrComponent } from '@L3Process/system/modules/formBuilder/components/formElements/adr/adr.component';
import { FieldOptionsComponent } from './components/field-options/field-options.component';


@NgModule({
  declarations: [
    FormBuilderComponent,
    FormDragComponent,
    MasterFormComponent,
    TxtComponent,
    TxaComponent,
    TimComponent,
    PwdComponent,
    PhnComponent,
    NumComponent,
    MonComponent,
    HidComponent,
    EmlComponent,
    DtiComponent,
    DatComponent,
    CurComponent,
    AdrComponent,
    FieldOptionsComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    DndModule.forRoot(),
    FormBuilderRoutes,
    FormsModule
  ],
  entryComponents: [TxtComponent, TxaComponent, TimComponent, PwdComponent, PhnComponent,
                    NumComponent, MonComponent, HidComponent, EmlComponent, DtiComponent,
                    DatComponent, CurComponent, AdrComponent],
  providers: [FormBuilderService, FormMasterService],
  bootstrap: [FormBuilderComponent]
})
export class FeFormBuilderModule { }
