import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.css']
})
export class AdminNavComponent implements OnInit {
  options: FormGroup;
  panelOpenState = false;

  constructor(fb: FormBuilder) { 
    this.options = fb.group({
      bottom: 0,
      fixed: true,
      top: 0
    });
  }

  ngOnInit(): void {
  }

}
