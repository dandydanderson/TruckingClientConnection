import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Carrier } from '../../models/carriers';
import { CarrierService } from '../../services/carrier.service';
import { Route } from 'src/app/models/routes'
import { RouteService } from 'src/app/services/route.service';
@Component({
  selector: 'app-admin-main-dash',
  templateUrl: './admin-main-dash.component.html',
  styleUrls: ['./admin-main-dash.component.css']
})
export class AdminMainDashComponent implements OnInit {
carriers:Carrier[];
displayedColumns: string[] = ['position', 'name'];

routes:Route[];
  constructor(
    private carrierService: CarrierService,
    private router: Router,
    private routeService: RouteService) { }

  ngOnInit(): void {
    this.carrierService.getCarriers().subscribe(carrier =>{
      
      this.carriers = carrier;
      console.log(this.carriers);
  });
  this.routeService.getRoutes()
  .subscribe(routest => {this.routes = routest
    console.log(this.routes);
   });
  

}
viewRoute(route:Route){
console.log(route);
}
}