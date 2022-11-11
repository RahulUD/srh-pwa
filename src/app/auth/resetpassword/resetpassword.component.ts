import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { signInText, signUpText, passwordHelpText, resetPasswordText } from 'src/app/util/textConstant';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {
  signInText=signInText
  signUpText=signUpText
  passwordHelpText =passwordHelpText
  resetPasswordText = resetPasswordText

  constructor() { }

  ngOnInit(): void {
  }
  resetPasswordForm = new FormGroup({
    password: new FormControl('', [Validators.required, Validators.email]),
    rePassword: new FormControl('', [Validators.required]),
  });
}
