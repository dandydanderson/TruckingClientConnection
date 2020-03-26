import { Component, OnInit, ViewChild } from '@angular/core';
import { SubmitOrderService } from '../../services/submit-order.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-client-dashboard',
  templateUrl: './client-dashboard.component.html',
  styleUrls: ['./client-dashboard.component.css']
})
export class ClientDashboardComponent implements OnInit {
  constructor(private submitOrderService: SubmitOrderService) { }

  public btnClicked: boolean = true;
  public show: boolean;

  ngOnInit(): void {
  }

  submitOrder() {
    this.btnClicked = false;
    this.submitOrderService.sendClickEvent();
  }

}
