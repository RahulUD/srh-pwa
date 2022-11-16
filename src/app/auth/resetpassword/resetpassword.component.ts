import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from 'src/app/service/shared.service';
import {
  signInText,
  signUpText,
  passwordHelpText,
  resetPasswordText,
  resetPassRes,
} from 'src/app/util/textConstant';
import { responseType } from 'src/types/user';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss'],
})
export class ResetpasswordComponent implements OnInit {
  signInText = signInText;
  signUpText = signUpText;
  passwordHelpText = passwordHelpText;
  resetPasswordText = resetPasswordText;
  resetPassRes = resetPassRes;
  token: string | undefined;
  isProcessing: boolean = false;
  resStatus!: { status: number; message: string | null; isSuccess: boolean };
  responseStatus!: responseType | null;
  constructor(
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private sharedService: SharedService
  ) {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.token = activatedRoute.snapshot.params['token'];
    });
    this.sharedService.responseObser$.subscribe((response) => {
      this.responseStatus = response;
    });
  }

  ngOnInit(): void {}
  resetPasswordForm = new FormGroup({
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
    rePassword: new FormControl('', [Validators.required]),
  });

  resetPassword() {
    if (this.resetPasswordForm.valid) {
      this.isProcessing = true;
      this.authService
        .resetPassword({
          password: this.resetPasswordForm.value.password,
          token: this.token,
        })
        .subscribe({
          next: (res) =>
            this.sharedService.setResponse({ ...res, resId: resetPassRes }),
          error: (err) => {
            this.sharedService.setResponse({
              ...err.error,
              resId: resetPassRes,
            }),
              (this.isProcessing = false);
            this.resetPasswordForm.reset();
          },
          complete: () => {
            this.isProcessing = false;
            this.resetPasswordForm.reset();
          },
        });
    } else {
      this.sharedService.setResponse({
        isSuccess: false,
        message: 'Invalid Password',
        status: 401,
        resId: resetPassRes,
      });

      return;
    }
  }
}
