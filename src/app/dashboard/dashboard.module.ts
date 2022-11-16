import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { CategoryComponent } from './category/category.component';
import { DashboardhomeComponent } from './dashboardhome/dashboardhome.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateBlogComponent } from './create-blog/create-blog.component';
import { DashboardbloglistComponent } from './dashboardbloglist/dashboardbloglist.component';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';

@NgModule({
  declarations: [
    DashboardComponent,
    CategoryComponent,
    DashboardhomeComponent,
    CreateBlogComponent,
    DashboardbloglistComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    MarkdownModule.forChild(),
  ]
})
export class DashboardModule { }
