import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { SharedModule } from '../shared/shared.module';
import { BlogsComponent } from './blogs/blogs.component';
import { BlogitemComponent } from './blogitem/blogitem.component';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [
    BlogComponent,
    BlogsComponent,
    BlogitemComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    SharedModule
  ]
})
export class BlogModule { }
