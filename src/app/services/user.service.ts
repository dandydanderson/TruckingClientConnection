import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json','Access-Control-Allow-Credentials': 'true','Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, HEAD, OPTIONS',
  'Access-Control-Allow-Origin': '*'})
}


@Injectable({
  providedIn: 'root'
})
export class UserService {

  Clients: string = 'http://localhost:8080/tms/client';
  Users: string = 'http://localhost:8080/tms/user';
  Carriers: string = 'http://localhost:8080/tms/carrier';

  constructor(private http: HttpClient) { }

  saveUser(user: User): Observable<User> {
    return this.http.post<User>(this.Users, JSON.stringify(user), httpOptions);
  }
}
