import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, FormGroup, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Carrier } from '../../models/carriers';
import { CarrierService } from '../../services/carrier.service';
import { UserS } from '../../models/userS'
import { UserService} from '../../services/user.service'
import { Router } from '@angular/router';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-truck-registration',
  templateUrl: './truck-registration.component.html',
  styleUrls: ['./truck-registration.component.css']
})
export class TruckRegistrationComponent implements OnInit {
  
  carrier:Carrier = {
    carrierName:"",
    username:"",
    password:"",
    mcNumber:"",
    dotnumber:"",
    taxId:0,
    pocFirstName:"",
    pocLastName:"",
    phoneNumber:0,
    faxNumber: 0,
    truck_number: 0,
    address:"",
    city:"",
    state:"",
    zipcode:"",
    classification:"",
    numberOfTrucks:0,
    dateSubmitted: new Date()};
form:any;
hidedate: boolean=false;
emailFormControl= new FormControl('', [
    Validators.required,
    Validators.email,

  ])


  
  
  
  matcher = new MyErrorStateMatcher();

  classification = 'option2';
  eType ='';
  constructor(
    private carrierService: CarrierService,
    private userService: UserService,
    private route:Router) { }

  ngOnInit(): void {
  }
  onSubmit({value, valid}: {value: Carrier, valid: boolean}){
    console.log(value)
    let username = value.username.toString();
    let password = value.password.toString();
    let userType = "carrier";
    this.userService.saveUser({ username, password, userType } as unknown as UserS).subscribe(user=>{
      console.log(user);
    }
    );

    value.dateSubmitted=this.carrier.dateSubmitted
    this.carrierService.saveCarrier(value).subscribe(
      carrier => {
        console.log(carrier);
      }
    )
    this.route.navigate(['/login']);

  }

}
