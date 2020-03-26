import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {
  }

  login({value, valid}: {value: User, valid: boolean}) {
    const username = this.loginForm.get('username');
    const password = this.loginForm.get('password');
    const user = new User(username.value, password.value);
    console.log(user);
    this.loginService.login(user).subscribe(
      (data) => this.router.navigateByUrl('/freight-dashboard')
    );
  }
}
