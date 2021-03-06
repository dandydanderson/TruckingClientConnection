import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Customer } from '../../models/customer';
import { ClientService } from '../../services/client.service';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { UserS } from '../../models/userS';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-client-registration',
  templateUrl: './client-registration.component.html',
  styleUrls: ['./client-registration.component.css']
})
export class ClientRegistrationComponent implements OnInit {

  options = {
    componentRestrictions: { country: ['US'] },
  }

  customer: Customer = {
    customerId: null,
    username: "",
    password: "",
    pocEmail: "",
    companyName: "",
    shippingPhone: 0,
    payablesPhone: 0,
    taxId: 0,
    phoneNumber: 0,
    faxNumber: 0,
    pocFirstName: "",
    pocLastName: "",
    pocPhone: 0,
    street: "",
    city: "",
    state: "",
    zip: 0,
    creditLine: 0,
    dbScore: 0,
    dateSubmitted: new Date()
  };
  hidedate: boolean=false;

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  states = [
    {name: 'Alabama', abbreviation: 'AL'},
    {name: 'Alaska', abbreviation: 'AK'},
    {name: 'American Samoa', abbreviation: 'AS'},
    {name: 'Arizona', abbreviation: 'AZ'},
    {name: 'Arkansas', abbreviation: 'AR'},
    {name: 'California', abbreviation: 'CA'},
    {name: 'Colorado', abbreviation: 'CO'},
    {name: 'Connecticut', abbreviation: 'CT'},
    {name: 'Delaware', abbreviation: 'DE'},
    {name: 'District Of Columbia', abbreviation: 'DC'},
    {name: 'Federated States Of Micronesia', abbreviation: 'FM'},
    {name: 'Florida', abbreviation: 'FL'},
    {name: 'Georgia', abbreviation: 'GA'},
    {name: 'Guam', abbreviation: 'GU'},
    {name: 'Hawaii', abbreviation: 'HI'},
    {name: 'Idaho', abbreviation: 'ID'},
    {name: 'Illinois', abbreviation: 'IL'},
    {name: 'Indiana', abbreviation: 'IN'},
    {name: 'Iowa', abbreviation: 'IA'},
    {name: 'Kansas', abbreviation: 'KS'},
    {name: 'Kentucky', abbreviation: 'KY'},
    {name: 'Louisiana', abbreviation: 'LA'},
    {name: 'Maine', abbreviation: 'ME'},
    {name: 'Marshall Islands', abbreviation: 'MH'},
    {name: 'Maryland', abbreviation: 'MD'},
    {name: 'Massachusetts', abbreviation: 'MA'},
    {name: 'Michigan', abbreviation: 'MI'},
    {name: 'Minnesota', abbreviation: 'MN'},
    {name: 'Mississippi', abbreviation: 'MS'},
    {name: 'Missouri', abbreviation: 'MO'},
    {name: 'Montana', abbreviation: 'MT'},
    {name: 'Nebraska', abbreviation: 'NE'},
    {name: 'Nevada', abbreviation: 'NV'},
    {name: 'New Hampshire', abbreviation: 'NH'},
    {name: 'New Jersey', abbreviation: 'NJ'},
    {name: 'New Mexico', abbreviation: 'NM'},
    {name: 'New York', abbreviation: 'NY'},
    {name: 'North Carolina', abbreviation: 'NC'},
    {name: 'North Dakota', abbreviation: 'ND'},
    {name: 'Northern Mariana Islands', abbreviation: 'MP'},
    {name: 'Ohio', abbreviation: 'OH'},
    {name: 'Oklahoma', abbreviation: 'OK'},
    {name: 'Oregon', abbreviation: 'OR'},
    {name: 'Palau', abbreviation: 'PW'},
    {name: 'Pennsylvania', abbreviation: 'PA'},
    {name: 'Puerto Rico', abbreviation: 'PR'},
    {name: 'Rhode Island', abbreviation: 'RI'},
    {name: 'South Carolina', abbreviation: 'SC'},
    {name: 'South Dakota', abbreviation: 'SD'},
    {name: 'Tennessee', abbreviation: 'TN'},
    {name: 'Texas', abbreviation: 'TX'},
    {name: 'Utah', abbreviation: 'UT'},
    {name: 'Vermont', abbreviation: 'VT'},
    {name: 'Virgin Islands', abbreviation: 'VI'},
    {name: 'Virginia', abbreviation: 'VA'},
    {name: 'Washington', abbreviation: 'WA'},
    {name: 'West Virginia', abbreviation: 'WV'},
    {name: 'Wisconsin', abbreviation: 'WI'},
    {name: 'Wyoming', abbreviation: 'WY'}
  ];

  hasAlternateAddress = false;
  hasUnitNumber = false;

  matcher = new MyErrorStateMatcher();

  constructor(
    private clientService: ClientService,
    private userService: UserService,
    private route: Router) { }

  ngOnInit(): void {
  }

  public setUsername($event) {
    this.customer.username = ($event.target.value);
  }

  public setFields($event){
    for (let index = 0; index < $event.address_components.length; index++) {
      let type = $event.address_components[index].types[0];
      console.log(type);
      if (type === "street_number") {
        this.customer.street = ($event.address_components[index].long_name);
      } else if (type === "route") {
        this.customer.street = this.customer.street + " " + ($event.address_components[index].long_name);
      } else if (type === "locality") {
        this.customer.city = ($event.address_components[index].long_name);
      } else if (type === "administrative_area_level_1") {
        this.customer.state = ($event.address_components[index].short_name);
      } else if (type === "postal_code") {
        this.customer.zip = ($event.address_components[index].long_name);
      } else {
      }
    }
  }

  onSubmit({value, valid}:{value: Customer, valid: boolean}) {
    console.log(value);
    value.dateSubmitted = this.customer.dateSubmitted;
    this.clientService.saveClient(value).subscribe(
      carrier => {
        console.log(carrier);
      }
    )
    },2000);
   
    this.route.navigate(['/register-redirect']);

  }
  


}
