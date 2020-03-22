import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

import { Carrier } from '../models/Carrier';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json','Access-Control-Allow-Credentials': 'true','Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, HEAD, OPTIONS',
  'Access-Control-Allow-Origin': '*'})
}

@Injectable({
  providedIn: 'root'
})
export class CarrierService {
  allCarriersUrl: string = 'http://localhost:8080/tms/carrier';
  constructor(private http: HttpClient) { }

  getCarriers() : Observable<Carrier[]>{
    return this.http.get<Carrier[]>(this.allCarriersUrl);

}
saveCarrier(carrier: Carrier): Observable<Carrier>{
  return this.http.post<Carrier>(this.allCarriersUrl,JSON.stringify(carrier),httpOptions);
}
}
