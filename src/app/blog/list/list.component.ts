import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { BlogsService } from 'src/app/service/blogs.service';
import { baseBlog } from 'src/types/blog';
import { paginationConfigType } from 'src/types/common';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private blogsService: BlogsService
  ) {}
 response : any
  blogType!: string;
  requestObj = {
    limit: 25,
    page: 1,
    fields: '_id,title,description,updatedAt, createdAt',
  };
  ngOnInit() {
    this.route.params.subscribe((data) => {
      this.blogType = data['value'];
    });
    this.route.data.subscribe((blogs) => {
      this.response = blogs['blogs']
    });
  }
  paginationEventHandler(event: number) {
    this.blogsService
      .getBlogs({
        params: {
          ...this.requestObj,
          value: 'Results',
          page: event,
        },
      })
      .subscribe((res) => {
        this.response= res;
        window.scrollTo(0, 0)
      });
  }
}
