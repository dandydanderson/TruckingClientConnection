import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service'
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
 
  constructor(private authService: LoginService,
    private router: Router){}
  canActivate(): boolean{
    if(this.authService.loggedIn()){
      return true;
    }else{
      this.router.navigate(['/login'])
    }
  }
  
}
