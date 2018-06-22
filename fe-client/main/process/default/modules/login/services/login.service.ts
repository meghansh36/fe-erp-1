import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators/map';

export interface userDetails {
  username:string;
  exp:number;
  iat:number;
}

interface tokenResponse {
  token:string;
}

// export interface tokenPayload {
//   username:string;
//   password:string;
// }

@Injectable({
  providedIn: 'root'
})
export class FeLoginService {
  private _loginUrl ="/api/default/login/login";
  private token:string;

  constructor(private _http: HttpClient,
            public _jwtHelper: JwtHelperService,
            private _router: Router) { }


  private saveToken(token:string):void{
    localStorage.setItem('token', token);
    this.token = token;
  }

  private getToken():string{
    if(!this.token){
      this.token = localStorage.getItem('token');
    }
    return this.token;
  }
  /**
   * decode jwt's payload part and returns
   */
  public getUserDetails():userDetails {
    const token = this.getToken();
    let payload;
    if(token){
      payload = token.split('.')[1];
      payload = window.atob(payload);
      return JSON.parse(payload);
    } else {
      return null;
    }
  }

  loginUser(userData){
    return this._http.post<any>(this._loginUrl, userData)
              .pipe(
                map((data:tokenResponse)=>{
                if(data.token){
                  this.saveToken(data.token);
                }
                console.log(data);
                return data;
                })
              );
  }

  /**
   * Logout method: removes token from LocalStorage 
   * and Redirects to login page
   */
  public logOut(): void {
    this.token='';
    window.localStorage.removeItem('token');
    this._router.navigateByUrl(this._loginUrl);
  }

  /**
   * Method to check whether user is Logged in or not
   * Checks with token's expiry time
   */
  // public isLoggedIn(): boolean {
  //   const token = localStorage.getItem('token');
  //   return this._jwtHelper.isTokenExpired(token);
  // }
  
  public isLoggedIn(): boolean {
    const user = this.getUserDetails();
    if (user) {
      return user.exp > Date.now() / 1000;
    } else {
      return false;
    }
  }

  /**
   * Method to check whether Logged out or not
   * checks login status 
   */

  isLoggedOut():boolean {
    return !this.isLoggedIn();
  }

}
