import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json', 'Access-Control-Allow-Credentials': 'true', 'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, HEAD, OPTIONS',
    'Access-Control-Allow-Origin': '*'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  allClientsUrl: string = 'http://localhost:8080/tms/client';
  singleClientUrl: string = 'http://localhost:8080/tms/client/'
  allCustomersUrl: string = 'http://localhost:8080/tms/customer';
  private readonly getCustomerByUsername: string = "http://localhost:8080/tms/customer/"


  constructor(private http: HttpClient) { }

  getClients(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.allClientsUrl, httpOptions);
  }

  saveClient(customer: Customer): Observable<Customer>{
    return this.http.post<Customer>(this.allClientsUrl,JSON.stringify(customer),httpOptions);
  }

  getCustomer(username: String): Observable<Customer> {
    return this.http.get<Customer>(this.getCustomerByUsername + username, httpOptions);
  }

}
