import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '@L3Process/default/modules/home/home.component';
import { FRM0000001Component } from '@L1Forms/FRM0000001.component';
import { FormBuilderModule } from '@L3Process/system/modules/formBuilder/formBuilder.module';
import { FormRenderModule } from '@L3Process/system/modules/formRender/formRender.module';
import { LoginModule } from '@L3Process/default/modules/login/login.module';
import { routes } from '@L3Process/default/modules/home/home.routing';
import { HttpClientModule } from '@angular/common/http';

import { FormGeneratorModule } from '@L1Process/system/modules/formGenerator/formGenerator.module';

const routing: ModuleWithProviders = RouterModule.forRoot(routes);


@NgModule({
  declarations: [
    HomeComponent,
    FRM0000001Component,
  ],
  imports: [
    BrowserModule,
    FormGeneratorModule,
    NgbModule.forRoot(),
    routing,
    HttpClientModule,
    FormRenderModule
  ],
  providers: [],
 bootstrap: [HomeComponent]
})
export class FeHomeModule { }
