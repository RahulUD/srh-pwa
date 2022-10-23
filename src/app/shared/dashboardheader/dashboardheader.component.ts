import { SocialAuthService } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/service/shared.service';
import { UserService } from 'src/app/service/user.service';
import { baseBlog } from 'src/types/blog';
import { baseUser } from 'src/types/user';

@Component({
  selector: 'dashboard-header',
  templateUrl: './dashboardheader.component.html',
  styleUrls: ['./dashboardheader.component.scss'],
})
export class DashboardheaderComponent implements OnInit {
  constructor(
    public sharedService: SharedService,
    private authService: SocialAuthService,
    public userService: UserService
  ) {}
  user!: baseUser

  ngOnInit(): void {
    
  }

  logout() {
    this.authService.signOut();
  }
}
