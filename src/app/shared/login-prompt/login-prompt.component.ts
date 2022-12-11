import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'login-prompt',
  templateUrl: './login-prompt.component.html',
  styleUrls: ['./login-prompt.component.scss']
})
export class LoginPromptComponent implements OnInit {
  redirectUrl: any;
  
  constructor(private router: Router) { 
    this.router.events.subscribe((evt) => {
      if ((evt instanceof NavigationEnd)) {
          this.redirectUrl = evt['url']
      }
    })
  }

  ngOnInit(): void {
  }
  redirectToLogin(){
    this.router.navigate(['/user/auth/signin',this.redirectUrl])
    bootstrap.Modal.getInstance("#login-prompt")?.hide()
  }
}