import { SocialAuthService } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { AuthService } from 'src/app/auth/service/auth.service';
import { SharedService } from 'src/app/service/shared.service';
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
    private router: Router,
    public authService: AuthService,
  ) {
      this.authService.authUser$.subscribe(user=> this.user= user)
  }
  ngOnInit(): void {
    
  }

  logout() {
    this.router.navigate(['/'])
  }
}