import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HomeComponent } from '@L3Process/default/modules/home/home.component';

import { HomesModule } from './homes/homes.module';
import { FormBuilderModule } from '@L3Process/system/modules/formBuilder/formBuilder.module';
import { FormRenderModule } from '@L3Process/system/modules/formRender/formRender.module';
import { routes } from '@L3Process/default/modules/home/home.routing';

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routing: ModuleWithProviders = RouterModule.forRoot(routes);

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
