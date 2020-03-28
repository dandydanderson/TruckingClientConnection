import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

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

  constructor(private router: Router, private loginService: LoginService, private userService: UserService) { }

  ngOnInit(): void {
  }

  login({ value, valid }: { value: User, valid: boolean }) {
    const username = this.loginForm.get('username');
    const password = this.loginForm.get('password');
    const user = new User(username.value, password.value);
    console.log(user);
    this.loginService.login(user).subscribe(
      (data) => {
        this.userService.getUser(user.username).subscribe(
          (userdata) => {
            if (userdata.userType == "customer") {
              this.router.navigateByUrl("/client-dashboard");
            } else {
              this.router.navigateByUrl("/freight-dashboard");
            }
          })
      }
    );

  }
}
