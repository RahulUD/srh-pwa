import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalstorageService } from 'src/app/service/localstorage.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
    private localstorageService: LocalstorageService
  ) {
    this.signInForm.valueChanges.subscribe((val) => console.log(val));
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  signInHandler() {}

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
        this.router.navigate(['/dashboard']);
      });
  }
}
