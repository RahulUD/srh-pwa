import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {signInText, signUpText, sendPasswordResetLink, forgotPassHeadertext} from 'src/app/util/textConstant';
@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['./forgot-pass.component.scss']
})
export class ForgotPassComponent implements OnInit {
  signInText = signInText
  signUpText = signUpText
  sendPasswordResetLink =sendPasswordResetLink
  forgotPassHeadertext=forgotPassHeadertext
  constructor() { }

  ngOnInit(): void {
  }
  signInForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });
}
