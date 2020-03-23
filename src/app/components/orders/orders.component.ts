import { Component, OnInit } from '@angular/core';
import { SubmitOrderService } from '../../services/submit-order.service';
import { Subscription } from 'rxjs';
import { FormBuilder, Validators } from '@angular/forms';
import { Orders } from '../../orders';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  clickEventSubscription: Subscription;

  constructor(private fb: FormBuilder, private submitOrderService: SubmitOrderService) {
    this.clickEventSubscription =
      this.submitOrderService.getClickEvent().subscribe(() => { this.setForm(); })
  }

  orderForm = this.fb.group({
    orderNo: [null, Validators.required],
    noPallets: [null, Validators.required],
    puCity: [null, Validators.required],
    puState: [null, Validators.required],
    doCity: [null, Validators.required],
    doState: [null, Validators.required]
  });

  public showForm: boolean = false;

  submitted = false;

  onSubmit() { this.submitted = true; }

  ngOnInit(): void {
  }

  setForm() {
    this.showForm = true;
  }
}
