import { Component, OnInit, ViewChild } from '@angular/core';
import { Carrier } from '../../models/Carrier';
import { CarrierService } from '../../services/carrier.service';
import { Router } from '@angular/router';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {merge, Observable, of as observableOf} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import {animate, state, style, transition, trigger} from '@angular/animations';
@Component({
  selector: 'app-carrier-info',
  templateUrl: './carrier-info.component.html',
  styleUrls: ['./carrier-info.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class CarrierInfoComponent implements OnInit {
  columnsToDisplay = ['carrierId', 'carrierName', 'username', 'mcNumber','dotnumber','taxId'];
dataSource: Carrier[];
expandedElement: Carrier | null;
resultsLength = 0;
isLoadingResults = true;
isRateLimitReached: boolean = false;
@ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(
    private carrierService: CarrierService,
    private router: Router) { }

  ngOnInit(): void {
    this.carrierService.getCarriers().subscribe(carrier =>{
      setTimeout(() => {
              this.dataSource = carrier;
              console.log(this.dataSource);
      this.isLoadingResults=false;
      }, 2000);

      if(this.dataSource.length==0){
        this.isRateLimitReached=true;
      }
    });

  }
  applyFilter(event: Event) {

  }
  toEdit(e){
    console.log(e)
    e.preventDefault();
  }

}
