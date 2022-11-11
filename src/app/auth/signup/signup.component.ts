import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { signInText, passwordHelpText } from 'src/app/util/textConstant';
import { environment } from 'src/environments/environment';
import { baseUser } from 'src/types/user';
import { AuthService } from '../service/auth.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signInText=signInText
  passwordHelpText=passwordHelpText
  constructor( private router: Router, private authService : AuthService) { }

  ngOnInit(): void {
  }

  signUpForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    rePassword: new FormControl('', [Validators.required]),
  });

  localSingUp(){
    this.authService
      .singUp(
        {name :this.signUpForm.value.name,
        email :this.signUpForm.value.email,
        password: this.signUpForm.value.password}
      )
      .subscribe((user) => {
        this.authService.setAuthUser(user);
        this.router.navigate(['/dashboard']);
      });
  }
}
