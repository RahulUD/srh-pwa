import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { CreateBlogComponent } from './create-blog/create-blog.component';
import { DashboardComponent } from './dashboard.component';
import { DashboardbloglistComponent } from './dashboardbloglist/dashboardbloglist.component';
import { DashboardhomeComponent } from './dashboardhome/dashboardhome.component';
import { MediaComponent } from './media/media.component';
import { AllblogsResolver } from './resolver/allblogs.resolver';
import { CategoryResolver } from './resolver/category.resolver';

const routes: Routes = [
  {path:'', component : DashboardComponent, children:[
    {path : '', component : DashboardhomeComponent},
    {path : 'categories', component : CategoryComponent, resolve: {
      categiries: CategoryResolver,
    },},
    {path : 'media', component : MediaComponent},
    {path : 'blogs/create', component : CreateBlogComponent},
    {path : 'blogs/list', component : DashboardbloglistComponent, resolve : {
      blogs: AllblogsResolver
    }},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
