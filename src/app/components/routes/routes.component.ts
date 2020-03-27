import { Component, OnInit, Input } from '@angular/core';
import { Route } from 'src/app/models/routes'
import { ROUTES } from 'src/app/testRoutes'
import { RouteService } from 'src/app/services/route.service';

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
  dataSource :Route[];
  dataSource2 : Route[];
  carrierId: string = '2';

  constructor(private routeService: RouteService) { }

  ngOnInit(): void {

    this.routeService.getCarriersRoutes(this.carrierId)
    .subscribe((routes: Route[]) => this.dataSource = routes);
    console.log(this.dataSource);

    this.routeService.getCarrierRoutesWithSpace(this.carrierId)
    .subscribe((routes: Route[]) => this.dataSource2 = routes);

  }

}
