import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Carrier } from '../../models/carriers';
import { CarrierService } from '../../services/carrier.service';
import { Route } from 'src/app/models/routes'
import { RouteService } from 'src/app/services/route.service';
import { Orders } from '../../models/orders';
import { OrderService } from '../../services/order.service'

@Component({
  selector: 'app-admin-main-dash',
  templateUrl: './admin-main-dash.component.html',
  styleUrls: ['./admin-main-dash.component.css']
})
export class AdminMainDashComponent implements OnInit {
carriers:Carrier[];
displayedColumns: string[] = ['position', 'name'];
orders:Orders[];

routes:Route[];
  constructor(
    private carrierService: CarrierService,
    private router: Router,
    private routeService: RouteService,
    private orderService: OrderService) { }

  ngOnInit(): void {
    this.carrierService.getCarriers().subscribe(carrier =>{
      
      this.carriers = carrier;
  });
  this.routeService.getRoutes()
  .subscribe(routest => {this.routes = routest
   });
   this.orderService.getOrders().subscribe(order => {this.orders = order
    console.log(this.orders);
  });
  

}
viewRoute(route:Route){
console.log(route);
}
viewOrder(order:Orders){
  console.log(order);
  }
}