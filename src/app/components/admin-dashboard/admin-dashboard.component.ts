import { Component, OnInit, Input, } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
@Input() navPage: string;
firstLoad: boolean =true;

  constructor() { }

  ngOnInit(): void {
  }
 onNavChange(e:string){
  this.navPage = e;
  this.firstLoad=false;
 }
}
