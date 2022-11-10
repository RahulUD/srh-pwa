import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  constructor() {
    this.signInForm.valueChanges.subscribe(val=> console.log(val))
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
 
  signInHandler() {
    
  }

  signInForm = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required]),
    rememberMe: new FormControl(false),
  });

  
}
