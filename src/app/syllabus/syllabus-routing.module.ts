import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SyllabusHomeComponent } from './syllabus-home/syllabus-home.component';
import { SyllabusComponent } from './syllabus.component';
import { SyllabusDetailComponent } from './syllabus-detail/syllabus-detail.component';
import { AllSyllabusResolver } from './resolver/all-syllabus.resolver';
import { SyllabusResolver } from './resolver/syllabus.resolver';

const routes: Routes = [
  {path:'', component:SyllabusComponent, children: [
    {path : 'home', component: SyllabusHomeComponent, resolve : [AllSyllabusResolver]},
    {path : 'details/:_id', component: SyllabusDetailComponent, resolve : [SyllabusResolver]},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SyllabusRoutingModule { }
