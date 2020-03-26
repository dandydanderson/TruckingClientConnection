import { Component, OnInit } from '@angular/core';
import { SubmitOrderService } from '../../services/submit-order.service';
import {FormControl, FormGroupDirective, NgForm, FormGroup} from '@angular/forms';
import { Subscription } from 'rxjs';
import { FormBuilder, Validators } from '@angular/forms';
import { Orders } from '../../models/orders';


@Component({
  selector: 'app-orders-form',
  templateUrl: './orders-form.component.html',
  styleUrls: ['./orders-form.component.css']
})
export class OrdersFormComponent implements OnInit {
  // clickEventSubscription: Subscription;

  // constructor(private fb: FormBuilder, private submitOrderService: SubmitOrderService) {
  //   this.clickEventSubscription =
  //     this.submitOrderService.getClickEvent().subscribe(() => { this.setForm(); })
  // }

  constructor(private fb: FormBuilder) { }

  orderForm = this.fb.group({
    orderNo: [null, Validators.required],
    noPallets: [null, Validators.required],
    puCity: [null, Validators.required],
    puState: [null, Validators.required],
    doCity: [null, Validators.required],
    doState: [null, Validators.required]
  });

  order = new Orders(null, null,"Atlanta, GA","Tampa, FL",null)
  // public showForm: boolean = false;

  // submitted = false;

  // onSubmit() { this.submitted = true; }
  onSubmit() { }

  ngOnInit(): void {
  }

  // setForm() {
  //   this.showForm = true;
  // }
}
