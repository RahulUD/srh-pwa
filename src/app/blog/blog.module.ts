import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { HeaderComponent } from './header/header.component';
import { BlogComponent } from './blog.component';


@NgModule({
  declarations: [
    HeaderComponent,
    BlogComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }
