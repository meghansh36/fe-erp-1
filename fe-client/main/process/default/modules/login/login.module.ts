import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { LoginComponent } from '@L3Process/default/modules/login/login.component';
import { LoginService } from '@L3Process/default/modules/login/services/login.service';

import { routes } from '@L3Process/default/modules/login/login.routing';

const routing: ModuleWithProviders = RouterModule.forChild(routes);

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    FormsModule,
    NgbModule.forRoot(),
    HttpClientModule,
    routing
  ],
  providers: [LoginService],
})
export class FeLoginModule { }


