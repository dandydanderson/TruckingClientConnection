import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.css']
})
export class AdminNavComponent implements OnInit {
  options: FormGroup;
  panelOpenState = false;
  firstLoad: boolean =true;
  pageName: string = "";
  @Output() navToEmit: EventEmitter<any> = new EventEmitter();
  constructor(fb: FormBuilder) { 
    this.options = fb.group({
      bottom: 0,
      fixed: true,
      top: 0
    });
  }

  ngOnInit(): void {
    this.pageName="admin-dash"
  }
toNav(e, numb){
  let n = parseInt(numb);
switch(n){
case 1:
  this.pageName = 'carrier-info';
  this.navToEmit.emit(this.pageName);
  break;
case 13:
  this.pageName = 'admin-dash';
  this.navToEmit.emit(this.pageName);
  break;

}


  e.preventDefault();
}
}
