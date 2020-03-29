import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registration-redirect',
  templateUrl: './registration-redirect.component.html',
  styleUrls: ['./registration-redirect.component.css']
})
export class RegistrationRedirectComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      
      this.router.navigate(['/login']);
    }, 1250);
  }

}
