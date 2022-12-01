import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogsService } from 'src/app/service/blogs.service';
import { paginationConfigType } from 'src/types/common';
import { darkColors } from '../../util/colors';
@Component({
  selector: 'app-blogshome',
  templateUrl: './blogshome.component.html',
  styleUrls: ['./blogshome.component.scss'],
})
export class BlogshomeComponent implements OnInit {
  jobs: any;
  jobsPagination!: paginationConfigType;
  admitCards: any;
  admitPagination!: paginationConfigType;
  results: any;
  resultsPagination!: paginationConfigType;
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
  colorArr: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private blogsService: BlogsService
  ) {
    this.colorArr = darkColors;
  }
  requestObj = {
    limit: 25,
    page: 1,
    fields: '_id,title,description,updatedAt, createdAt',
  };
  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ blogs }) => {
      this.jobs = blogs.latestJob;
      this.results = blogs.result;
      this.admitCards = blogs.admitCard;
      this.hots = blogs.hots.data;
    });
  }
  jobsPaginationEventHandler(event: number) {
    this.blogsService
      .getBlogs({
        params: {
          ...this.requestObj,
          value:'Latest Jobs',
          page: event,
        },
      })
      .subscribe((res) => {this.jobs=res});
  }
  resultPaginationEventHandler(event: number) {
    this.blogsService
      .getBlogs({
        params: {
          ...this.requestObj,
          value:'Results',
          page: event,
        },
      })
      .subscribe((res) => {this.results=res});
  }
  admitcardPaginationEventHandler(event: number) {
    this.blogsService
    .getBlogs({
      params: {
        ...this.requestObj,
        value:'Admit Card',
        page: event,
      },
    })
    .subscribe((res) => {this.admitCards=res});
  }

  getColor() {
    return this.colorArr[Math.floor(Math.random() * this.colorArr.length)];
  }
}
