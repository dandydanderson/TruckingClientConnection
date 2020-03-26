import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-redirect',
  templateUrl: './admin-redirect.component.html',
  styleUrls: ['./admin-redirect.component.css']
})
export class AdminRedirectComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {

    setTimeout(() => {
      
      this.route.navigate(['/admin-dashboard']);
    }, 1000);
  }

}
