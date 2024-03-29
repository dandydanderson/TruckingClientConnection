import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Orders } from '../models/orders';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json', 'Access-Control-Allow-Credentials': 'true', 'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, HEAD, OPTIONS',
    'Access-Control-Allow-Origin': '*'
  })
}

@Injectable({
  providedIn: 'root'
})

export class OrderService {

  private readonly allOrdersUrl: string = 'http://localhost:8080/tms/order';
  private readonly singleCarrierUrl: string = 'http://localhost:8080/tms/order/';
  private readonly getOrdersByCustomerIdUrl: string = 'http://localhost:8080/tms/orders/'
  private readonly getAllOrdersByCustomerWithRouteUrl: string = "http://localhost:8080/tms/ordersRoute/"


  constructor(private http: HttpClient) { }

  getOrdersByCustomer(id: number): Observable<Orders[]> {
    return this.http.get<Orders[]>(this.getOrdersByCustomerIdUrl + id, httpOptions)
  }

  getOrdersByCustomerWithRoute(id: number): Observable<Orders[]> {
    return this.http.get<Orders[]>(this.getAllOrdersByCustomerWithRouteUrl + id, httpOptions)
  }

  getOrder(id: number): Observable<Orders[]> {
    return this.http.get<Orders[]>(this.singleCarrierUrl + id, httpOptions);
  }

  getOrders(): Observable<Orders[]> {
    console.log(this.http.get<Orders[]>(this.allOrdersUrl));
    return this.http.get<Orders[]>(this.allOrdersUrl);
  }

  saveOrder(order: Orders): Observable<Orders> {
    return this.http.post<Orders>(this.allOrdersUrl, JSON.stringify(order), httpOptions);
  }

}
