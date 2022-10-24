import { AmazonLoginProvider, FacebookLoginProvider, GoogleLoginProvider, MicrosoftLoginProvider, SocialAuthService, SocialUser, VKLoginProvider } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { baseUser } from 'src/types/user';
import { UserService } from '../service/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  GoogleLoginProvider = GoogleLoginProvider;

  constructor(private router: Router,private readonly _authService: SocialAuthService, private userService: UserService) {}

  ngOnInit() {
    this._authService.authState.subscribe((user) => {
      this.userService.setAuthUser({ ...user,
        avatar: user.photoUrl,
        password: '',
        date_of_birth: undefined,
        providerId: user.id})
      this.userService.upsert(user.email, {
        ...user,
        avatar: user.photoUrl,
        password: '',
        date_of_birth: undefined,
        providerId: user.id
      }).subscribe(res=>{
        this.router.navigate(['/dashboard']);
      })
    });
  }

  signInWithFB(): void {
    this._authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signInWithAmazon(): void {
    this._authService.signIn(AmazonLoginProvider.PROVIDER_ID);
  }

  signInWithVK(): void {
    this._authService.signIn(VKLoginProvider.PROVIDER_ID);
  }

  signInWithMicrosoft(): void {
    this._authService.signIn(MicrosoftLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this._authService.signOut();
    this.userService.deleteAuthUser();
  }

  refreshGoogleToken(): void {
    this._authService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
  }
}
