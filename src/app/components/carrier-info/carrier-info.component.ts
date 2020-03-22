import { Component, OnInit, ViewChild } from '@angular/core';
import { Carrier } from '../../models/Carrier';
import { CarrierService } from '../../services/carrier.service';
import { Router } from '@angular/router';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {merge, Observable, of as observableOf} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-carrier-info',
  templateUrl: './carrier-info.component.html',
  styleUrls: ['./carrier-info.component.css']
})

export class CarrierInfoComponent implements OnInit {
displayedColumns: string[] = ['carrier_id', 'carrier_name', 'username', 'mc_number'];
data: Carrier[];
resultsLength = 0;
isLoadingResults = true;
isRateLimitReached: boolean = false;
@ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(
    private carrierService: CarrierService,
    private router: Router) { }

  ngOnInit(): void {
    this.carrierService.getCarriers().subscribe(carrier =>{
      this.data = carrier;
      this.isLoadingResults=false;
      if(this.data.length==0){
        this.isRateLimitReached=true;
      }
    });

  }
  applyFilter(event: Event) {

  }

}
