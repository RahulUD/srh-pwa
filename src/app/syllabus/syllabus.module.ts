import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SyllabusRoutingModule } from './syllabus-routing.module';
import { SyllabusComponent } from './syllabus.component';
import { SharedModule } from '../shared/shared.module';
import { SyllabusHomeComponent } from './syllabus-home/syllabus-home.component';


@NgModule({
  declarations: [
    SyllabusComponent,
    SyllabusHomeComponent
  ],
  imports: [
    CommonModule,
    SyllabusRoutingModule,
    SharedModule
  ]
})
export class SyllabusModule { }
