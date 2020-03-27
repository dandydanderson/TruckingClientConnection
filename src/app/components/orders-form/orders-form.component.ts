import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { OrderService } from 'src/app/services/order.service';
import { Orders } from '../../models/orders';
import {Router} from '@angular/router';

@Component({
  selector: 'app-orders-form',
  templateUrl: './orders-form.component.html',
  styleUrls: ['./orders-form.component.css']
})
export class OrdersFormComponent implements OnInit {
  order = new Orders (null,null, null);


  constructor(private fb: FormBuilder, private orderService: OrderService, private router: Router) { }

  orderForm = this.fb.group({
    orderSize: [null, Validators.required],
    pickupLocation: [null, Validators.required],
    deliveryLocation: [null, Validators.required],
  });

  onSubmit() {
    console.log(this.order);
    this.orderService.saveOrder(this.order).subscribe((order: Orders) => this.order = order);
    // this.router.navigate(['/client-dashboard']);
  }

  options = {
    componentRestrictions: { country: ['US'] },
    types: ['(cities)'],
  }

  public setPickupLocation($event) {
    this.order.pickupLocation = ($event.address_components[0].long_name + ", " + $event.address_components[2].short_name);
  }

  public setDeliveryLocation($event) {
    this.order.deliveryLocation =($event.address_components[0].long_name + ", " + $event.address_components[2].short_name);
  }

  ngOnInit(): void { }
}
