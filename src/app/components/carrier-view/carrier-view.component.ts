import { Component, OnInit, ViewChild, EventEmitter, Output, Input } from '@angular/core';
import { Carrier } from '../../models/carriers';
import { CarrierService } from '../../services/carrier.service';
import { Router } from '@angular/router';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {merge, Observable, of as observableOf} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-carrier-view',
  templateUrl: './carrier-view.component.html',
  styleUrls: ['./carrier-view.component.css']
})
export class CarrierViewComponent implements OnInit {
  columnsToDisplay = ['carrierId', 'carrierName', 'username', 'mcNumber','dotnumber','taxId'];
  dataSource: Carrier[];
  expandedElement: Carrier | null;
  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached: boolean = false;
  currentCarrier:Carrier = {
  
    carrierId:8,
    carrierName:"",
    username:"",
    password:"",
    mcNumber:"",
    dotnumber:"",
    taxId:0,
    pocFirstName:"",
    pocLastName:"",
    phoneNumber:"",
    faxNumber: "",
    truck_number: 0,
    address:"",
    city:"",
    state:"",
    zipcode:"",
    classification:"",
    numberOfTrucks:0,
      dateSubmitted: null
  }
  @Output() carrierToEmit: EventEmitter<Carrier> = new EventEmitter();
  @ViewChild(MatPaginator) paginator: MatPaginator;
    constructor(
      private carrierService: CarrierService,
      private router: Router) { }

  ngOnInit(): void {
    this.carrierService.getCarriers().subscribe(carrier =>{
      
      this.dataSource = carrier;
      console.log(this.dataSource);
this.isLoadingResults=false;
this.currentCarrier = carrier[0];


if(carrier.length==0){
this.isRateLimitReached=true;

}
});
  }
  applyFilter(event: Event) {

  }
  toEdit(e){
    let b = '';
    let carrierindId: number;

    if(e.target.tagName === "BUTTON"){
      b = e.target.parentElement.parentElement.parentElement.parentElement.previousElementSibling.sectionRowIndex;
      carrierindId = parseInt(b)/2;
      this.currentCarrier = this.dataSource[carrierindId];
    }else if(e.target.tagName === "SPAN"){
      b = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.previousElementSibling.sectionRowIndex;
      carrierindId = parseInt(b)/2;
      this.currentCarrier = this.dataSource[carrierindId];

      this.carrierToEmit.emit(this.currentCarrier);

      this.router.navigate([], {fragment: 'edit-carrier'});
      // document.querySelector('#edit-carrier').click();
    }
    console.log(e);
    console.log(b);
    console.log(this.currentCarrier)
    
    e.preventDefault();
  }
  toDelete(e){

    let b = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.previousElementSibling.firstElementChild.innerHTML;

    this.carrierService.deleteCarrier(b).subscribe(message =>{
      this.currentCarrier.carrierId=0;
      
    });
    
  }
cl(e){
  console.log(e);
e.preventDefault();
}

}
