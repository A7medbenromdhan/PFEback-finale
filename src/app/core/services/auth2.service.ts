import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const AUTH_API = 'http://localhost:8082/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class Auth2Service {


  constructor(private http: HttpClient) { }

  login(body:any): Observable<any> {
    return this.http.post("http://localhost:8082/api/auth/signin", body, httpOptions);
  }
  //'api/auth/signupt'

  register(body:any): Observable<any> {
    return this.http.post(AUTH_API + 'signup', body, httpOptions);
  }
}