import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blogshome',
  templateUrl: './blogshome.component.html',
  styleUrls: ['./blogshome.component.scss']
})
export class BlogshomeComponent implements OnInit {

  jobs: any;
  admitCards: any;
  results: any;
  hots: any
  marqueeData = [
    {title: "UPSE", url: "https://www.google.com"},
    {title: "BPSE", url: "https://www.google.com"},
    {title: "TET", url: "https://www.google.com"},
    {title: "SSC-CGL", url: "https://www.google.com"},
    {title: "SSC-CHSL", url: "https://www.google.com"},
    {title: "Railway Group - D", url: "https://www.google.com"},
    {title: "Railway JE", url: "https://www.google.com"},
    {title: "BANK PO", url: "https://www.google.com"},
    {title: "Army", url: "https://www.google.com"},
    {title: "Airforce", url: "https://www.google.com"}
  ]
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ blogs }) => {
      this.jobs = blogs.latestJob
      this.admitCards = blogs.admitCard
      this.results = blogs.result
      this.hots = blogs.hots
    });
  }

}
