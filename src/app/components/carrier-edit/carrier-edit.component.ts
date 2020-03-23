import { Component, OnInit, Input, Output } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, FormGroup, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Carrier } from '../../models/Carrier';
import { CarrierService } from '../../services/carrier.service';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-carrier-edit',
  templateUrl: './carrier-edit.component.html',
  styleUrls: ['./carrier-edit.component.css']
})
export class CarrierEditComponent implements OnInit {

  @Input() currentCarrier: Carrier;

form:any;
hidedate: boolean=false;
emailFormControl= new FormControl('', [
    Validators.required,
    Validators.email,

  ])


  
  
  
  matcher = new MyErrorStateMatcher();

  classification = 'option2';
  eType ='';
  constructor(private carrierService: CarrierService) { }

  ngOnInit(): void {
  }
  onSubmit({value, valid}: {value: Carrier, valid: boolean}){
    console.log(value)
    value.dateSubmitted=this.currentCarrier.dateSubmitted
    this.carrierService.saveCarrier(value).subscribe(
      carrier => {
        console.log(carrier);
      }
    )
    

  }

}
