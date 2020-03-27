import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

import { UserS } from '../models/userS'

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}


@Injectable({
  providedIn: 'root'
})
export class UserService {

  saveUserUrl: string = 'http://localhost:8080/tms/user';
  getSingleUserUrl: string = 'http://localhost:8080/tms/user/';

  constructor(private http: HttpClient) { }

  saveUser(user: UserS):Observable<UserS>{
    return this.http.post<UserS>(this.saveUserUrl,JSON.stringify(user),httpOptions);
  }
  getUser(username:String):Observable<UserS>{
    let usernamelen = username.length;
    username = username.slice(0,usernamelen-4);
    return this.http.get<UserS>(this.getSingleUserUrl+username,httpOptions);
  }

}
