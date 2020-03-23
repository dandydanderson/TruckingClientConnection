import { Injectable } from '@angular/core';
import { Orders } from '../orders';

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {
  private orderListJson = `[
    {
  "make": "Ford",
    "model": "F-120",
      "year": 1920,
        "vin": "some string of numbers"
}
}]`;


  orderList: Orders[];

  public listOrders(): Orders[] {
    return this.orderList;
  }


  constructor() { 
    this.orderList = JSON.parse(this.orderListJson);
  }
}
