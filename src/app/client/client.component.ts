import { Component, OnInit, ViewChild } from '@angular/core';
import { SubmitOrderService } from '../submit-order.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
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
