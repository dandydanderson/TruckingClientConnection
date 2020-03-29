import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly url = `http://localhost:8080/tms/login`;

  constructor(private http: HttpClient) { }

  login(user: User) {
    return this.http.post<any>(this.url, user);
  }
  loggedIn(){
    return !!localStorage.getItem('token')
  }
  getToken(){
    return localStorage.getItem('token');
  }
}
