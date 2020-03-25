import { Component, OnInit, Input } from '@angular/core';
import { Route } from 'src/app/models/routes'
import { ROUTES } from 'src/app/testRoutes'

@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.css']
})
export class RoutesComponent implements OnInit {

  // @Input()this will be used once my contrller works
  // routeList: Route[];
  routeList = ROUTES;
  displayedColumns: string[] = ['routeId', 'truckId', 'startDate', 'endDate'];
  dataSource = ROUTES;
  

  constructor() { }

  ngOnInit(): void {
  }

}
