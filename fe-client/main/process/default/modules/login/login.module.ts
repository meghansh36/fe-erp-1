import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoginComponent } from '@L3Process/default/modules/login/login.component';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [LoginComponent]
})
export class FeLoginModule { }
