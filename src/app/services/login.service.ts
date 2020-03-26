import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly url = `http://localhost:8080/trucking/users`;

  constructor(private http: HttpClient) { }

  login(user: User) {
    return this.http.post<any>(this.url, user);
  }
}
