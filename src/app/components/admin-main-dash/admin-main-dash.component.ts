import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Carrier } from '../../models/carriers';
import { CarrierService } from '../../services/carrier.service';
@Component({
  selector: 'app-admin-main-dash',
  templateUrl: './admin-main-dash.component.html',
  styleUrls: ['./admin-main-dash.component.css']
})
export class AdminMainDashComponent implements OnInit {
carriers:Carrier[];
displayedColumns: string[] = ['position', 'name'];
  constructor(
    private carrierService: CarrierService,
    private router: Router) { }

  ngOnInit(): void {
    this.carrierService.getCarriers().subscribe(carrier =>{
      
      this.carriers = carrier;
      console.log(this.carriers);
  });

}
}