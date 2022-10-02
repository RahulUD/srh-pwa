import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog.component';
import { ListComponent } from './list/list.component';
import { BlogallResolver } from './resolver/blogall.resolver';

const routes: Routes = [
  {path : '', component : BlogComponent, 
  resolve: {
    blogs: BlogallResolver,
  },},
  {path : 'blogs/:blogType', component : ListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
