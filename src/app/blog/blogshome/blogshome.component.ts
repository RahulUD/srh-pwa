import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {darkColors} from '../../util/colors';
@Component({
  selector: 'app-blogshome',
  templateUrl: './blogshome.component.html',
  styleUrls: ['./blogshome.component.scss'],
})
export class BlogshomeComponent implements OnInit {
  jobs: any;
  admitCards: any;
  results: any;
  hots: any;
  marqueeData = [
    { title: 'UPSE' },
    { title: 'BPSE' },
    { title: 'TET' },
    { title: 'SSC-CGL' },
    { title: 'SSC-CHSL' },
    { title: 'Railway Group - D' },
    { title: 'Railway JE' },
    { title: 'BANK PO' },
    { title: 'Army' },
    { title: 'Airforce' },
  ];
  colorArr: any
  constructor(private activatedRoute: ActivatedRoute) {
    this.colorArr = darkColors;
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ blogs }) => {
      this.jobs = blogs.latestJob;
      this.admitCards = blogs.admitCard;
      this.results = blogs.result;
      this.hots = blogs.hots;
    });
  }

  getColor() {
    return this.colorArr[Math.floor(Math.random() * this.colorArr.length)];
  }
}
