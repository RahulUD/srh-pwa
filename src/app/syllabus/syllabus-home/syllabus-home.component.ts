import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SyllabusService } from 'src/app/service/syllabus.service';
import { baseSyllabus } from 'src/types/syllabus';

@Component({
  selector: 'app-syllabus-home',
  templateUrl: './syllabus-home.component.html',
  styleUrls: ['./syllabus-home.component.scss']
})
export class SyllabusHomeComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  syllabuses !: any
  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data: any) => {
      this.syllabuses = data[0];
    });
    console.log(this.syllabuses)
  }
}
