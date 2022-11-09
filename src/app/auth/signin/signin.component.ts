import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  constructor() {}
  rememberMe!: boolean;
  email!: string;
  password!: string;

  ngOnInit(): void {}

  setEmail($value: string) {
    this.email = $value;
  }
  setPassword($value: string) {
    this.password = $value;
  }
  setRememberMe($value: string) {
    this.rememberMe = !this.rememberMe;
  }
  signInHandler() {
    this.rememberMe = false;
    this.email = '';
    this.password = '';
  }
}
