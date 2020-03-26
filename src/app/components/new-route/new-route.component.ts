import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, FormGroup, Validators } from '@angular/forms';
import { Route } from 'src/app/models/routes';
import { Carrier } from 'src/app/models/carriers';

@Component({
  selector: 'app-new-route',
  templateUrl: './new-route.component.html',
  styleUrls: ['./new-route.component.css']
})
export class NewRouteComponent implements OnInit {

  route = new Route(0, 0, '', 0, null, null, null, null, 0, '', '')


  constructor() { }

  onSubmit() {
    //this needs to populate all the fields in route and then attempt to save it to the database.

  }

  ngOnInit(): void {
  }

}
