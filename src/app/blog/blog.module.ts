import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { SharedModule } from '../shared/shared.module';
import { BlogsComponent } from './blogs/blogs.component';
import { BlogitemComponent } from './blogitem/blogitem.component';
import { ListComponent } from './list/list.component';
import { BlogdetailComponent } from './blogdetail/blogdetail.component';
import { BlogshomeComponent } from './blogshome/blogshome.component';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';


@NgModule({
  declarations: [
    BlogComponent,
    BlogsComponent,
    BlogitemComponent,
    ListComponent,
    BlogdetailComponent,
    BlogshomeComponent,
    
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    SharedModule,
    MarkdownModule.forChild(),
  ]
})
export class BlogModule { }
