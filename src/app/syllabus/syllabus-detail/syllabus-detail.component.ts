import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { responseSyllabus } from 'src/types/syllabus';

@Component({
  selector: 'app-syllabus-detail',
  templateUrl: './syllabus-detail.component.html',
  styleUrls: ['./syllabus-detail.component.scss'],
})
export class SyllabusDetailComponent implements OnInit {
  syllabus!: responseSyllabus;
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((res: any) => {
      this.syllabus = res[0];

      this.router.events.subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
          return;
        }
        window.scrollTo(0, 0);
      });
    });
  }
}
