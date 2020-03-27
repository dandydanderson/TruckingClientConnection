import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Client } from '../models/client';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  allClientsUrl: string = 'http://localhost:8080/tms/carrier';

  constructor(private http: HttpClient) { }

  saveClient(client: Client): Observable<Client>{
    return this.http.post<Client>(this.allClientsUrl,JSON.stringify(client),httpOptions);
  }
}
