import { ClientService } from '../../services/client.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Orders } from 'src/app/models/orders';
import { OrderService } from '../../services/order.service';
import { Customer } from 'src/app/models/customer';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  displayedColumns = ['orderId', 'orderSize', 'routeId', 'pickupLocation', 'deliveryLocation'];
  customerId: number = 12;
  customer: Customer;
  private: number;
  dataSource: Orders[];
  dataSource2: Orders[];
  // expandedElement: Orders | null;
  isLoadingResults = true;
  isLoadingResults2 = true;
  isRateLimitReached: boolean = false;
  isRateLimitReached2: boolean = false;
  username: string = localStorage.getItem('token').split(" ")[0].toString();
  constructor(private orderService: OrderService, private router: Router, private clientService: ClientService) { }

  ngOnInit(): void {
    this.clientService.getCustomer(this.username)
      .subscribe(customer => {
        this.customer = customer;
        console.log(this.dataSource);
      })

    setTimeout(() => {
      this.orderService.getOrdersByCustomer(this.customer.customerId)
        .subscribe(order => {
          this.dataSource = order;
          console.log(this.dataSource);

          this.isLoadingResults = false;

          if (order.length == 0) {
            this.isRateLimitReached = true;
          }
        })

      this.orderService.getOrdersByCustomerWithRoute(this.customer.customerId)
        .subscribe(order2 => {
          this.dataSource2 = order2;
          console.log(this.dataSource2);

          this.isLoadingResults2 = false;

          if (order2.length == 0) {
            this.isRateLimitReached2 = true;
          }
        })
    }, 1000);
  }

}
