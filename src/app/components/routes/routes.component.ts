import {CarrierService} from '../../services/carrier.service';
import { Component, OnInit, Input } from '@angular/core';
import { Route } from 'src/app/models/routes'
import { ROUTES } from 'src/app/testRoutes'
import { RouteService } from 'src/app/services/route.service';
import { Carrier } from 'src/app/models/carriers';

@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.css']
})
export class RoutesComponent implements OnInit {

  // @Input()this will be used once my contrller works
  // routeList: Route[];
  routeList = ROUTES;
  displayedColumns: string[] = ['routeId', 'truckId', 'startDate', 'endDate','startLocation', 'endLocation', 'availablePallets'];
  carrier: Carrier;
  dataSource :Route[];
  dataSource2 : Route[];
  carrierId: string = '2';
  username: string = localStorage.getItem('token').split(" ")[0].toString();

  constructor(private routeService: RouteService, private carrierService: CarrierService) { }

  ngOnInit(): void {

    this.carrierService.getCarrier(this.username)
      .subscribe(carrier => {
        this.carrier = carrier;
        console.log(this.carrier);
      })

    setTimeout(() => {
      this.routeService.getCarriersRoutes(this.carrier.carrierId)
      .subscribe((routes: Route[]) => this.dataSource = routes);
      console.log(this.dataSource);
  
      this.routeService.getCarrierRoutesWithSpace(this.carrier.carrierId)
      .subscribe((routes: Route[]) => this.dataSource2 = routes);  
     }, 1000);
  }

}
