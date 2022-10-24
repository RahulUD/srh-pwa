import { SocialAuthService } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { SharedService } from 'src/app/service/shared.service';
import { UserService } from 'src/app/service/user.service';
import { baseUser } from 'src/types/user';

@Component({
  selector: 'dashboard-header',
  templateUrl: './dashboardheader.component.html',
  styleUrls: ['./dashboardheader.component.scss'],
})
export class DashboardheaderComponent implements OnInit {
  user!: baseUser | null
  constructor(
    public sharedService: SharedService,
    private authService: SocialAuthService,
    public userService: UserService,
    private router: Router
  ) {
      this.userService.authUser$.subscribe(user=> this.user= user)
  }
  ngOnInit(): void {
    
  }

  logout() {
    this.authService.signOut();
    this.userService.deleteAuthUser()
    this.router.navigate(['/'])
  }
}