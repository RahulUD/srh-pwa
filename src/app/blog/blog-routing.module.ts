import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog.component';
import { BlogdetailComponent } from './blogdetail/blogdetail.component';
import { BlogshomeComponent } from './blogshome/blogshome.component';
import { ListComponent } from './list/list.component';
import { BlogResolver } from './resolver/blog.resolver';
import { BlogallResolver } from './resolver/blogall.resolver';

const routes: Routes = [
  {path : '', component : BlogComponent , children : [
  {path : '', component : BlogshomeComponent,  resolve: {
    blogs: BlogallResolver,
  },},
  {path : 'blogs/:blogType', component : ListComponent},
  {path : 'blogs/blogId/:id', component : BlogdetailComponent,  resolve: {
    blogs: BlogResolver,
  },}
]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
