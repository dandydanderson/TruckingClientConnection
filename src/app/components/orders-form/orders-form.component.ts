import { Customer } from '../../models/customer';
import { ClientService } from '../../services/client.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';
import { Orders } from '../../models/orders';

@Component({
  selector: 'app-orders-form',
  templateUrl: './orders-form.component.html',
  styleUrls: ['./orders-form.component.css']
})
export class OrdersFormComponent implements OnInit {

  customer: Customer;
  order = new Orders(this.customer.customerId, null, null, null);


  constructor(private fb: FormBuilder, private orderService: OrderService, private router: Router, private clientService: ClientService) { }

  orderForm = this.fb.group({
    orderSize: [null, Validators.required],
    pickupLocation: [null, Validators.required],
    deliveryLocation: [null, Validators.required],
  });

  onSubmit() {
    console.log(this.order);
    this.orderService.saveOrder(this.order).subscribe((order: Orders) => this.order = order);

    setTimeout(() => {
      this.router.navigate(['/client-dashboard']);
    }, 1000);
  }

  options = {
    componentRestrictions: { country: ['US'] },
    types: ['(cities)'],
  }

  public setPickupLocation($event) {
    this.order._pickupLocation = ($event.address_components[0].long_name + ", " + $event.address_components[2].short_name);
  }

  public setDeliveryLocation($event) {
    this.order._deliveryLocation = ($event.address_components[0].long_name + ", " + $event.address_components[2].short_name);
  }
  username: string = localStorage.getItem('token').split(" ")[0].toString();
  ngOnInit(): void {
    this.clientService.getCustomer(this.username)
      .subscribe(order => {
        this.customer = order;
        console.log(this.customer);
      })
  }
}
