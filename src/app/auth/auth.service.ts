import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { JwtResponse } from './jwt-response';
import { AuthLoginInfo } from './login-info';
import { SignUpInfo } from './signup-info';
import { ArticleInfo } from './article-info';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUrl = 'http://localhost:8080/api/auth/signin';
  private signupUrl = 'http://localhost:8080/api/auth/signup';

  private loginJournalistUrl = 'http://localhost:8080/journalist/auth/signin';
  private signupJournalistUrl = 'http://localhost:8080/journalist/auth/signup';

  private postArticle='http://localhost:8080/api/article';

  constructor(private http: HttpClient) {
  }

  attemptAuth(credentials: AuthLoginInfo): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(this.loginUrl, credentials, httpOptions);
  }

  signUp(info: SignUpInfo): Observable<string> {
    return this.http.post<string>(this.signupUrl, info, httpOptions);
  }


  AuthpostArticle(info:ArticleInfo): Observable<string> {
    return this.http.post<string>(this.postArticle, info, httpOptions);
  }
  /*Journalist sign up & authentification*/

  attemptAuthJournalist(credentials: AuthLoginInfo): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(this.loginJournalistUrl, credentials, httpOptions);
  }

  signUpJournalist(info: SignUpInfo): Observable<string> {
    return this.http.post<string>(this.signupJournalistUrl, info, httpOptions);
  }
}
