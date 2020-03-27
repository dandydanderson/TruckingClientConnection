import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, FormGroup, Validators } from '@angular/forms';
import { Route } from 'src/app/models/routes';
import { Carrier } from 'src/app/models/carriers';
import { RouteService } from 'src/app/services/route.service';
import { CarrierService } from 'src/app/services/carrier.service';

@Component({
  selector: 'app-new-route',
  templateUrl: './new-route.component.html',
  styleUrls: ['./new-route.component.css']
})
export class NewRouteComponent implements OnInit {
  carrierId: string = '2';
  carrier: Carrier;
  route = new Route(0, parseInt(this.carrierId), '', 0, null,null,null,null,0,'',''  );


 

  constructor(private routeService: RouteService, private carrierService: CarrierService) { }
  onSubmit(){

    this.routeService.saveRoute(this.route)
    .subscribe((route: Route) => this.route = route);

    this.route._startDate = new Date(this.route._startDate);
    console.log(this.route);
 
  }

  ngOnInit(): void {

    this.carrierService.getCarrier(this.carrierId)
      .subscribe(carrier => this.carrier = carrier);
      console.log(this.carrier);

  }

}

