import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, FormGroup, Validators } from '@angular/forms';
import { Route } from 'src/app/models/routes';
import { Carrier } from 'src/app/models/carriers';
import { RouteService } from 'src/app/services/route.service';
import { CarrierService } from 'src/app/services/carrier.service';
import { Router } from '@angular/router';
import { getLocaleDateFormat, getLocaleDateTimeFormat } from '@angular/common';

@Component({
  selector: 'app-new-route',
  templateUrl: './new-route.component.html',
  styleUrls: ['./new-route.component.css']
})
export class NewRouteComponent implements OnInit {
  carrierId: number = null;
  carrier: Carrier;
  route = new Route(0, null, null, new Date, new Date, 0, '', '');
  username: string = localStorage.getItem('token').split(" ")[0].toString()

  options = {
    componentRestrictions: { country: ['US'] },
    types: ['(cities)'],
  }

  public setPickupLocation($event) {
    this.route._startLocation = ($event.address_components[0].long_name + ", " + $event.address_components[2].short_name);
  }

  public setDeliveryLocation($event) {
    this.route._endLocation = ($event.address_components[0].long_name + ", " + $event.address_components[2].short_name);
  }

  constructor(private routeService: RouteService, private carrierService: CarrierService, private router: Router) { }
  onSubmit() {
    this.route._carrierId = this.carrier.carrierId;
    // this.route._startDate = new Date(this.route._startDate);
    this.routeService.saveRoute(this.route).subscribe((route: Route) => this.route = route);
    console.log(this.route);

    setTimeout(() => {
      this.router.navigate(['/freight-dashboard']);
    }, 1000);
  }


  ngOnInit(): void {

    this.carrierService.getCarrier(this.username)
      .subscribe(carrier => this.carrier = carrier);
    console.log(this.carrier);
    this.carrierId = this.carrier.carrierId;
  }

}

