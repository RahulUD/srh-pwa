import {
  AmazonLoginProvider,
  FacebookLoginProvider,
  GoogleLoginProvider,
  MicrosoftLoginProvider,
  SocialAuthService,
  SocialUser,
  VKLoginProvider,
} from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { baseUser } from 'src/types/user';
import { authService } from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  GoogleLoginProvider = GoogleLoginProvider;

  constructor(
    private router: Router,
    private readonly _authService: SocialAuthService,
    private authService: authService
  ) {}

  ngOnInit() {
    this._authService.authState.subscribe((user) => {
      this.authService.setAuthUser({
        ...user,
        avatar: user.photoUrl,
        password: '',
        date_of_birth: undefined,
        providerId: user.id,
      });
      this.authService
        .upsert(user.email, {
          ...user,
          avatar: user.photoUrl,
          password: '',
          date_of_birth: undefined,
          providerId: user.id,
        })
        .subscribe((res) => {
          this.router.navigate(['/dashboard']);
        });
    });
  }

  signInForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

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
    this.authService.deleteAuthUser();
  }

  refreshGoogleToken(): void {
    this._authService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
  }
  localSignIn() {
    this.authService
      .signIn(
        this.signInForm.value.email ?? '',
        this.signInForm.value.password ?? ''
      )
      .subscribe((user) => {
        this.authService.setAuthUser(user);
        this.router.navigate(['/dashboard']);
      });
  }
}
