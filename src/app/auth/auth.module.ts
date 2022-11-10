import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { AuthRoutingModule } from './auth-routing.module';
import { ElementModule } from '../element/element.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SignupComponent,
    SigninComponent,
    ResetpasswordComponent,
    ChangepasswordComponent,
  ],
  imports: [CommonModule, AuthRoutingModule, ElementModule,ReactiveFormsModule],
})
export class AuthModule {}
