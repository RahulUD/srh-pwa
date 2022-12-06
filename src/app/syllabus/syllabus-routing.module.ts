import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SyllabusHomeComponent } from './syllabus-home/syllabus-home.component';
import { SyllabusComponent } from './syllabus.component';

const routes: Routes = [
  {path:'', component:SyllabusComponent, children: [
    {path : 'home', component: SyllabusHomeComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SyllabusRoutingModule { }
