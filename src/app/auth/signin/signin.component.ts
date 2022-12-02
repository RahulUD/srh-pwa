import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Router,
} from '@angular/router';
import { LocalstorageService } from 'src/app/service/localstorage.service';
import { AuthService } from '../service/auth.service';
import {
  signUpText,
  forgotPass,
  passwordHelpText,
  signIn,
  rememberMe,
} from 'src/app/util/textConstant';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent {
  signUpText = signUpText;
  forgotPass = forgotPass;
  signIn = signIn;
  rememberMe = rememberMe;
  passwordHelpText = passwordHelpText;

  constructor(
    private authService: AuthService,
    private router: Router,
    private activeRouteSnap: ActivatedRoute,
    private localstorageService: LocalstorageService
  ) {
    this.redirectUrl = this.activeRouteSnap.snapshot.params['redirectUrl'];
  }

  redirectUrl: string = '/dashboard';

  signInForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    rememberMe: new FormControl(false),
  });
  localSignIn() {
    this.authService
      .signIn(
        this.signInForm.value.email ?? '',
        this.signInForm.value.password ?? ''
      )
      .subscribe((user) => {
        this.authService.setAuthUser(user);
        if (this.signInForm.value.rememberMe) {
          this.localstorageService.saveData(
            this.localstorageService.authuser,
            user
          );
        }
        this.router.navigate([this.redirectUrl]);
      });
  }
}
