import { Component, OnInit } from '@angular/core';
import { Carrier } from 'src/app/models/carriers';
import { Router } from '@angular/router';
import { CarrierEditComponent } from '../carrier-edit/carrier-edit.component';
import { CarrierService } from 'src/app/services/carrier.service';
import { RouteService } from 'src/app/services/route.service';

@Component({
  selector: 'app-freight-dashboard',
  templateUrl: './freight-dashboard.component.html',
  styleUrls: ['./freight-dashboard.component.css']
})
export class FreightDashboardComponent implements OnInit {

  cr: Carrier = {
    carrierId:1,
    carrierName: 'Amazon Freight',
    username: 'un',
    password: 'pw',
    mcNumber: '1234',
    dotnumber: '5678',
    taxId: 4556151,
    pocFirstName:'David',
    pocLastName: 'Manderson',
    phoneNumber: '7061234654',
    faxNumber: '7061234655',
    truck_number: 5,
    address:'15 Main St',
    city:'Atlanta',
    state:'GA',
    zipcode:'30415',
    classification:'Large Truck',
    numberOfTrucks:10000,
    dateSubmitted: new Date()
  };

  constructor(private router: Router, private carrierService: CarrierService, private routeService: RouteService) { }

  newRoute(){
    console.log("getting into the function");
    this.router.navigate(['/new-route']);
  }

  ngOnInit(): void {

    this.carrierService.getCarrier('2')
      .subscribe(carrier => this.cr = carrier);
      console.log(this.cr);


  }

}
