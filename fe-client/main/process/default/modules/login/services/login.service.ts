import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FeLoginService {
  private _loginUrl ="/api/default/login/login";

  constructor(private http: HttpClient) { }

  loginUser(userData){
    return this.http.post<any>(this._loginUrl, userData);
  }
}
