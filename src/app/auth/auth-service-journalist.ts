import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { JwtResponse } from './jwt-response';
import { AuthLoginInfo } from './login-info';
import { SignUpInfojournalist } from './signup-info-journalist';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthServieJournalist{
    private loginUrl = 'http://localhost:8080/api/auth/signin';
    private signupUrl = 'http://localhost:8080/api/auth/signup';
    constructor(private http: HttpClient) {
    }
  
    attemptAuth(credentials: AuthLoginInfo): Observable<JwtResponse> {
      return this.http.post<JwtResponse>(this.loginUrl, credentials, httpOptions);
    }
  
    signUp(info: SignUpInfojournalist): Observable<string> {
      return this.http.post<string>(this.signupUrl, info, httpOptions);
    }
}