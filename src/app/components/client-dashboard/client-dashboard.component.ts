import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Router } from '@angular/router';
import { Customer } from 'src/app/models/customer';


@Component({
  selector: 'app-client-dashboard',
  templateUrl: './client-dashboard.component.html',
  styleUrls: ['./client-dashboard.component.css']
})
export class ClientDashboardComponent implements OnInit {
  constructor(private router: Router, private clientService: ClientService) { }

  isLoadingResults = true;
  dataSource: Customer;
  name: String = "Kenneth";
  company: String = "Revature"
  username: string = localStorage.getItem('token').split(" ")[0].toString()

  ngOnInit(): void {
    this.clientService.getCustomer(this.username)
      .subscribe(order => {
        this.dataSource = order;
        console.log(this.dataSource);

        this.isLoadingResults = false;
      })
    }

    submitOrder() {
      this.router.navigate(['/ordersForm']);
    }

  }
