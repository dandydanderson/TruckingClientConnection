import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

import { Carrier } from '../models/carriers';
import { Route } from '../models/routes';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json','Access-Control-Allow-Credentials': 'true','Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, HEAD, OPTIONS',
  'Access-Control-Allow-Origin': '*'})
}

@Injectable({
  providedIn: 'root'
})
export class RouteService {
  allRoutesUrl: string = 'http://localhost:8080/tms/route';
  allRoutesWithSpaceUrl: string = 'http://localhost:8080/tms/route/withSpsace';
  singleRouteUrl: string = 'http://localhost:8080/tms/route/';
  carrierRouteURL: string = 'http://localhost:8080/tms/carrierRoute/';
  carrierRouteWithSpaceURL: string = 'http://localhost:8080/tms/carrierRoute/withSpace/';
  constructor(private http: HttpClient) { }

getRoutes() : Observable<Route[]>{
    return this.http.get<Route[]>(this.allRoutesUrl);
}
getRoutesWithSpace() : Observable<Route[]>{
  return this.http.get<Route[]>(this.allRoutesWithSpaceUrl)
}

getCarriersRoutes(id: string) : Observable<Route[]>{
  let idValue = parseInt(id);
  return this.http.get<Route[]>(this.carrierRouteURL+idValue,httpOptions);
}
getCarrierRoutesWithSpace(id : string) : Observable<Route[]>{
  let idValue = parseInt(id);
return this.http.get<Route[]>(this.carrierRouteWithSpaceURL+idValue,httpOptions)
}

saveRoute(route: Route): Observable<Route>{
  return this.http.post<Route>(this.allRoutesUrl,JSON.stringify(route),httpOptions);
}
deleteRoute(id:string): Observable<Route>{
  let idValue = parseInt(id);
  return this.http.delete<Route>(this.singleRouteUrl+idValue,httpOptions);
}
getRoute(id:string): Observable<Route>{
  let idValue = parseInt(id);
  return this.http.get<Route>(this.singleRouteUrl+idValue,httpOptions);
}
updateRoute(route:Route): Observable<Route>{
  return this.http.put<Route>(this.singleRouteUrl+route._routeId,JSON.stringify(route),httpOptions);
}
}