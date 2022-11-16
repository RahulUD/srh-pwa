import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path: 'user/auth',
    component: AuthComponent,
    children: [
      { path: 'signin', component: SigninComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'forgotpassword', component: ForgotPassComponent },
      { path: 'reset-password/:token', component: ResetpasswordComponent },
      { path: 'changepassword', component: ChangepasswordComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
