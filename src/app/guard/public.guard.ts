import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../service/user.service';

@Injectable({
  providedIn: 'root'
})
export class PublicGuard implements CanActivate {
  isLoggedIn: boolean = false
  constructor(private userService : UserService, private router: Router){
    this.userService.isLoggedIn$.subscribe(isLoggedin=> this.isLoggedIn = isLoggedin)
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.isLoggedIn) {
        this.router.navigate(['/dashboard']);
        return false;
      } else {
        return true;
      }
  }
}
