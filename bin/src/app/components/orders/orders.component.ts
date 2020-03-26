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

  displayedColumns = ['orderId', 'orderSize', 'routeId', 'customerId', 'pickupLocation', 'deliveryLocation'];
  private: number;
  dataSource: Orders[];
  // expandedElement: Orders | null;
  isLoadingResults = true;
  isRateLimitReached: boolean = false;
  constructor(private orderService: OrderService,
    private router: Router) { }

  ngOnInit(): void {
    this.orderService.getOrders().subscribe(order => {
      this.dataSource = order;
      console.log(this.dataSource);
      this.isLoadingResults = false;

      if (order.length == 0) {
        this.isRateLimitReached = true;
      }
    })
  }

}
