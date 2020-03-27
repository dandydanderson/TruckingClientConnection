import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  allClientsUrl: string = 'http://localhost:8080/tms/register';

  constructor(private http: HttpClient) { }

  saveClient(customer: Customer): Observable<Customer>{
    return this.http.post<Customer>(this.allClientsUrl,JSON.stringify(customer),httpOptions);
  }
}
