import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/service/auth.service';
import { SharedService } from 'src/app/service/shared.service';
import { baseUser } from 'src/types/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user!: baseUser|null
  constructor(
    private router: Router,public sharedService : SharedService, public authService : AuthService) { 
    this.authService.authUser$.subscribe((user)=> {this.user = user})
  }

  ngOnInit(): void {
  
  }
  logout() {
    this.router.navigate(['/'])
  }
}
