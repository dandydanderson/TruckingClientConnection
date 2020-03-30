import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

import { Carrier } from '../models/carriers';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})

export class CarrierService {
  allCarriersUrl: string = 'http://localhost:8080/tms/carrier';
  singleCarrierUrl: string = 'http://localhost:8080/tms/carrier/';
  constructor(private http: HttpClient) { }

  getCarriers(): Observable<Carrier[]> {
    return this.http.get<Carrier[]>(this.allCarriersUrl);
  }

  saveCarrier(carrier: Carrier): Observable<Carrier> {
    return this.http.post<Carrier>(this.allCarriersUrl, JSON.stringify(carrier), httpOptions);
  }

  deleteCarrier(id: string): Observable<Carrier> {
    let idValue = parseInt(id);
    return this.http.delete<Carrier>(this.singleCarrierUrl + idValue, httpOptions);
  }

  getCarrier(username: string): Observable<Carrier> {
    let usernamelen = username.length;
    username = username.slice(0, usernamelen - 4);
    return this.http.get<Carrier>(this.singleCarrierUrl + username, httpOptions);
  }

  updateCarrier(carrier: Carrier): Observable<Carrier> {
    return this.http.put<Carrier>(this.singleCarrierUrl + carrier.carrierId, JSON.stringify(carrier), httpOptions);
  }
}
