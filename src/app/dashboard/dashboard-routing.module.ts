import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { DashboardComponent } from './dashboard.component';
import { DashboardhomeComponent } from './dashboardhome/dashboardhome.component';
import { CategoryResolver } from './resolver/category.resolver';

const routes: Routes = [
  {path:'', component : DashboardComponent, children:[
    {path : '', component : DashboardhomeComponent},
    {path : 'categories', component : CategoryComponent, resolve: {
      categiries: CategoryResolver,
    },},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
