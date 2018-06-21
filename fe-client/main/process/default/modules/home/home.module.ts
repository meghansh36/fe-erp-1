import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HomeComponent } from '@L3Process/default/modules/home/home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  //bootstrap: [HomeComponent]
})
export class FeHomeModule { }
