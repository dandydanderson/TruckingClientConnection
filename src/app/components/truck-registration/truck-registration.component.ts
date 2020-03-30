import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, FormGroup, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Carrier } from '../../models/carriers';
import { CarrierService } from '../../services/carrier.service';
import { UserS } from '../../models/userS'
import { UserService } from '../../services/user.service'
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

  carrier: Carrier = {
    carrierName: "",
    username: "",
    password: "",
    mcNumber: "",
    dotnumber: "",
    taxId: 0,
    pocFirstName: "",
    pocLastName: "",
    phoneNumber: "",
    faxNumber: "",
    truck_number: 0,
    address: "",
    city: "",
    state: "",
    zipcode: "",
    classification: "",
    numberOfTrucks: 0,
    dateSubmitted: new Date()
  };

  public setFields($event){
    this.carrier.address = ($event.address_components[0].long_name + " " + $event.address_components[1].short_name);
    this.carrier.city = ($event.address_components[2].long_name);
    this.carrier.state = ($event.address_components[4].short_name);
    this.carrier.zipcode = ($event.address_components[6].long_name);
  }

  form: any;
  hidedate: boolean = false;
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,

  ])

  matcher = new MyErrorStateMatcher();
  redirect: number = 1;
  classification = 'option2';
  eType = '';
  constructor(
    private carrierService: CarrierService,
    private userService: UserService,
    private route: Router) { }

  ngOnInit(): void {
  }
  onSubmit({ value, valid }: { value: Carrier, valid: boolean }) {
    console.log(value)
    let username = value.username.toString();
    let password = value.password.toString();
    let userType = "carrier";
    this.userService.saveUser({ username, password, userType } as unknown as UserS).subscribe(user => {
      console.log(user);
    }
    );
    setTimeout(() => {
      value.dateSubmitted = this.carrier.dateSubmitted
      this.carrierService.saveCarrier(value).subscribe(
        carrier => {
          console.log(carrier);
        }
      )
    }, 2000);

    this.route.navigate(['/register-redirect']);

  }

}
