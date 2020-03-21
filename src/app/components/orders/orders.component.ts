import { Component, OnInit } from '@angular/core';
import { SubmitOrderService } from '../../services/submit-order.service';
import { Subscription } from 'rxjs';
import { Orders } from '../../orders';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  clickEventSubscription: Subscription;

  constructor(private submitOrderService: SubmitOrderService) {
    this.clickEventSubscription =
      this.submitOrderService.getClickEvent().subscribe(() => { this.setForm(); })
  }

  public showForm: boolean = false;

  submitted = false;

  onSubmit() { this.submitted = true; }

  ngOnInit(): void {
  }

  setForm() {
    this.showForm = true;
  }
}
