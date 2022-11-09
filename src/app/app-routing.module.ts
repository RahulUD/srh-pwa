import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreloadAllModules } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { PublicGuard } from './guard/public.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path : '', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule)},
  {path : 'dashboard', canActivate: [AuthGuard], loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)},
  {path : 'login', canActivate: [PublicGuard], component: LoginComponent},
  {path : 'user/auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {
      preloadingStrategy: PreloadAllModules
    }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
