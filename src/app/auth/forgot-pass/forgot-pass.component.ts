import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SharedService } from 'src/app/service/shared.service';
import {
  signInText,
  signUpText,
  sendPasswordResetLink,
  forgotPassHeadertext,
  forgotPassRes,
} from 'src/app/util/textConstant';
import { responseType } from 'src/types/user';
import { AuthService } from '../service/auth.service';
@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['./forgot-pass.component.scss'],
})
export class ForgotPassComponent implements OnInit {
  signInText = signInText;
  signUpText = signUpText;
  sendPasswordResetLink = sendPasswordResetLink;
  forgotPassHeadertext = forgotPassHeadertext;
  forgotPassRes = forgotPassRes;
  isProcessing: boolean = false;
   responseStatus !: responseType | null
  constructor(
    private authService: AuthService,
    private sharedService: SharedService
  ) {
     this.sharedService.responseObser$.subscribe((response)=> {this.responseStatus = response})
  }

  ngOnInit(): void {}
  forgotPassword = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });
  forgotPasswordHandler() {
    if (this.forgotPassword.valid) {
      this.isProcessing = true;
      this.authService
        .forgotPassword({ email: this.forgotPassword.value.email })
        .subscribe({
          next: (res) =>
            this.sharedService.setResponse({ ...res, resId: forgotPassRes }),
          error: (err) => {
            this.sharedService.setResponse({
              ...err.error,
              resId: forgotPassRes,
            }),
              (this.isProcessing = false);
            this.forgotPassword.reset();
          },
          complete: () => {
            this.isProcessing = false;
            this.forgotPassword.reset();
          },
        });
    } else {
      this.sharedService.setResponse({
        isSuccess: false,
        message: 'Invalid Email',
        status: 401,
        resId: forgotPassRes,
      });
      return;
    }
  }
}
