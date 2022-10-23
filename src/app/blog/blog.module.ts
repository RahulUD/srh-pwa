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
import { MostclickedComponent } from './mostclicked/mostclicked.component';
import { MostclickeditemComponent } from './mostclicked/mostclickeditem/mostclickeditem.component';
import { BlogNavigationComponent } from './blog-navigation/blog-navigation.component';


@NgModule({
  declarations: [
    BlogComponent,
    BlogsComponent,
    BlogitemComponent,
    ListComponent,
    BlogdetailComponent,
    BlogshomeComponent,
    MostclickedComponent,
    MostclickeditemComponent,
    BlogNavigationComponent,
    
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    SharedModule,
    MarkdownModule.forChild(),
  ]
})
export class BlogModule { }
