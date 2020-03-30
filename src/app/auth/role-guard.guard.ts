import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { LoginService } from '../services/login.service'

@Injectable({
  providedIn: 'root'
})
export class RoleGuardGuard implements CanActivate {
  constructor(public auth: LoginService, public router: Router) { }
  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRole = route.data.expectedRole;

    const token = localStorage.getItem('token');

    if (token == null) {
      this.router.navigate(['/login']);
      return false;
    } else {
      const currentUser = token.split(" ")[1].toString();

      if (currentUser == null) {
        this.router.navigate(['/login']);
        return false;
      } else if (!this.auth.loggedIn() ||
        currentUser !== expectedRole) {
        if (currentUser === "customer") {
          this.router.navigateByUrl("/client-dashboard");
        } else if (currentUser === "admin") {
          this.router.navigateByUrl("/admin-dashboard");
        } else if (currentUser === "carrier") {
          this.router.navigateByUrl("/freight-dashboard");
        } else {
          this.router.navigate(['/login']);
          return false;
        }
      }
      return true;
    }
  }

}
