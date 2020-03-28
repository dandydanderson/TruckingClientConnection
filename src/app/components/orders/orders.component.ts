import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Orders } from 'src/app/models/orders';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  displayedColumns = ['orderId', 'orderSize', 'routeId', 'pickupLocation', 'deliveryLocation'];
  customerId: number = 12;
  private: number;
  dataSource: Orders[];
  dataSource2: Orders[];
  // expandedElement: Orders | null;
  isLoadingResults = true;
  isLoadingResults2 = true;
  isRateLimitReached: boolean = false;
  isRateLimitReached2: boolean = false;
  constructor(private orderService: OrderService,
    private router: Router) { }

  ngOnInit(): void {
    this.orderService.getOrdersByCustomer(this.customerId)
      .subscribe(order => {
        this.dataSource = order;
        console.log(this.dataSource);

        this.isLoadingResults = false;

        if (order.length == 0) {
          this.isRateLimitReached = true;
        }
      })

    this.orderService.getOrdersByCustomerWithRoute(this.customerId)
      .subscribe(order2 => {
        this.dataSource2 = order2;
        console.log(this.dataSource2);

        this.isLoadingResults2 = false;

        if (order2.length == 0) {
          this.isRateLimitReached2 = true;
        }
      })
  }

}
