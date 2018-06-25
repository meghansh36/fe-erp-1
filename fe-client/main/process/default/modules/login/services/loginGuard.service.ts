import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { LoginService } from '@L3Process/default/modules/login/services/login.service';

@Injectable({
    providedIn:'root'
})
export class FeLoginGuardService implements CanActivate {

  constructor(public _auth: LoginService, public _router: Router) {}

/**
 * Method for route guard:for handling protected routes
 */

  canActivate(): boolean {
    if (!this._auth.isLoggedIn()) {
      this._router.navigate(['/login']);
      return false;
    }
    return true;
  }
}