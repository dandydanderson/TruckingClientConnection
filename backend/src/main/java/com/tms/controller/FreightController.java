package com.tms.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import com.tms.models.Route;
import com.tms.service.FreightService;


@Controller
public class FreightController {
	
	
	private FreightService fs;
	
	@Autowired
	public void setFreightService(FreightService fs) {
		this.fs = fs;
	}


//	  allRoutesUrl: string = 'http://localhost:8080/tms/route';
//	  allRoutesWithSpaceUrl: string = 'http://localhost:8080/tms/route/withSpsace';
//	  singleRouteUrl: string = 'http://localhost:8080/tms/route/';
//	  carrierRouteURL: string = 'http://localhost:8080/tms/carrierRoute';
//	  carrierRouteWithSpaceURL: string = 'http://localhost:8080/tms/carrierRoute/withSpace';
//	  constructor(private http: HttpClient) { }
//
//	getRoutes() : Observable<Route[]>{
//	    return this.http.get<Route[]>(this.allRoutesUrl);
//	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/route")
	@ResponseBody
	public List<Route> getAllRoutes() {
	return fs.getAllRoutes();
	}
	
	
//	getRoutesWithSpace() : Observable<Route[]>{
//	  return this.http.get<Route[]>(this.allRoutesWithSpaceUrl)
//	}
//
	
	@CrossOrigin(origins = "http://localhost:4200")//this will return routes with space available eventually
	@GetMapping("/route/withSpace")
	@ResponseBody
	public List<Route> getAllRoutesWithSpace() {
	return fs.getAllRoutesWithSpace();
	}
	
	
//
//
//	getCarriersRoutes(id: number) : Observable<Route[]>{
//	  return this.http.get<Route[]>(this.allRoutesUrl+id,httpOptions);
//	}
	
	@CrossOrigin(origins = "http://localhost:4200")//this will return routes with space available eventually
	@GetMapping("/carrierRoute/withSpace/{id}")
	@ResponseBody
	public List<Route> getAllCarrierRoutes(@PathVariable int id) {
		List<Route> routes = fs.getAllRoutesByCarrierWithSpace(id);
		System.out.println(routes);
	return routes;
	}
	
	
//	getCarrierRoutesWithSpace(id : number) : Observable<Route[]>{
//	return this.http.get<Route[]>(this.carrierRouteWithSpaceURL+id,httpOptions)
//	}
	
	@CrossOrigin(origins = "http://localhost:4200")//this will return routes with space available eventually
	@GetMapping("/carrierRoute/{id}")
	@ResponseBody
	public List<Route> getAllCarrierRoutesWithSpace(@PathVariable int id) {
		List<Route> routes = fs.getAllRoutesByCarrier(id);
		System.out.println(routes);
	return routes;
	}
	
	
	
//
//
//	saveRoute(route: Route): Observable<Route>{
//	  return this.http.post<Route>(this.allRoutesUrl,JSON.stringify(route),httpOptions);
//	}
//	deleteRoute(id:string): Observable<Route>{
//	  let idValue = parseInt(id);
//	  return this.http.delete<Route>(this.singleRouteUrl+idValue,httpOptions);
//	}
//	getRoute(id:string): Observable<Route>{
//	  let idValue = parseInt(id);
//	  return this.http.get<Route>(this.singleRouteUrl+idValue,httpOptions);
//	}
//	updateRoute(route:Route): Observable<Route>{
//	  return this.http.put<Route>(this.singleRouteUrl+route.routeId,JSON.stringify(route),httpOptions);
//	}
	
	
	

	
}