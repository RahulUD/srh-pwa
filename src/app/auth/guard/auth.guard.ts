import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { baseUser } from 'src/types/user';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  isLoggedIn: boolean = false
  authUser!: baseUser|null
  constructor(private authService : AuthService, private router: Router){
    this.authService.isLoggedIn$.subscribe(isLoggedin=> this.isLoggedIn = isLoggedin)
    this.authService.authUser$.subscribe(authUser=> this.authUser = authUser)
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.isLoggedIn) {
        if(this.authUser?.provider === 'admin'){
          return true;
        }else{
          this.router.navigate(['/']);
          return true
        }
      } else {
        this.router.navigate(['/user/auth/signin']);
        return false;
      }
  }
}
