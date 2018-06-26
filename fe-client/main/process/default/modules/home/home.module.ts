import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '@L3Process/default/modules/home/home.component';
import { FormBuilderModule } from '@L3Process/system/modules/formBuilder/formBuilder.module';
import { FormRenderModule } from '@L3Process/system/modules/formRender/formRender.module';
import { DefaultModule } from '@L3Process/default/modules/default/default.module';
import { LoginModule } from '@L3Process/default/modules/login/login.module';
import { routes } from '@L3Process/default/modules/home/home.routing';
import { HttpClientModule } from '@angular/common/http';
import { CustomFormsModule } from 'ng4-validators';

import { FormGeneratorModule } from '@L1Process/system/modules/formGenerator/formGenerator.module';
import 'hammerjs';


const routing: ModuleWithProviders = RouterModule.forRoot(routes);


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormGeneratorModule,
    NgbModule.forRoot(),
    routing,
    HttpClientModule,
    FormRenderModule,
    CustomFormsModule
  ],
  providers: [],
 bootstrap: [HomeComponent]
})
export class FeHomeModule { }
