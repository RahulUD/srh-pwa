import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SyllabusRoutingModule } from './syllabus-routing.module';
import { SyllabusComponent } from './syllabus.component';
import { SharedModule } from '../shared/shared.module';
import { SyllabusHomeComponent } from './syllabus-home/syllabus-home.component';
import { SyllabusItemComponent } from './syllabus-item/syllabus-item.component';
import { SyllabusDetailComponent } from './syllabus-detail/syllabus-detail.component';
import { MarkdownModule } from 'ngx-markdown';


@NgModule({
  declarations: [
    SyllabusComponent,
    SyllabusHomeComponent,
    SyllabusItemComponent,
    SyllabusDetailComponent
  ],
  imports: [
    CommonModule,
    SyllabusRoutingModule,
    SharedModule,
    MarkdownModule.forChild()
  ]
})
export class SyllabusModule { }
