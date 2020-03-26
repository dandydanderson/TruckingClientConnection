import { Component, OnInit } from '@angular/core';
import { SubmitOrderService } from '../../services/submit-order.service';
import { FormControl, FormGroupDirective, NgForm, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { FormBuilder, Validators } from '@angular/forms';
import { Orders } from '../../models/orders';
import { OrderService } from 'src/app/services/order.service';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";



@Component({
  selector: 'app-orders-form',
  templateUrl: './orders-form.component.html',
  styleUrls: ['./orders-form.component.css']
})
export class OrdersFormComponent implements OnInit {

  order = new Orders('', '', 0);

  constructor(private fb: FormBuilder, private orderService: OrderService, ) { }

  orderForm = this.fb.group({
    orderSize: [null, Validators.required],
    pickupLocation: [null, Validators.required],
    deliveryLocation: [null, Validators.required],
  });

  onSubmit() {
    this.orderService.saveOrder(this.order).subscribe((order: Orders)=> this.order = order);
    console.log(this.order);
   }

   options = {
     comonentRestrictions: ['US']
   }

   public handleAddressChange(address: any) {

}
  ngOnInit(): void {
    // this.orderService.getOrder(this.o)
  }
}
