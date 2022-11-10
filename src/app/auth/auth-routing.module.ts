import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
    {path : 'signin',    component : SigninComponent},
    {path : 'signup',   component : SignupComponent},
    {path : 'passwordreset',   component : ResetpasswordComponent},
    {path : 'forgotPassword',   component : ForgotpasswordComponent},
    {path : 'changepassword',   component : ChangepasswordComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
