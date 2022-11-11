import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { AuthRoutingModule } from './auth-routing.module';
import { ElementModule } from '../element/element.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SocialLoginComponent } from './social-login/social-login.component';
import { SharedModule } from '../shared/shared.module';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';

@NgModule({
  declarations: [
    SignupComponent,
    SigninComponent,
    ResetpasswordComponent,
    ChangepasswordComponent,
    SocialLoginComponent,
    ForgotPassComponent,
  ],
  imports: [CommonModule, AuthRoutingModule, ElementModule,ReactiveFormsModule, SharedModule],
})
export class AuthModule {}
