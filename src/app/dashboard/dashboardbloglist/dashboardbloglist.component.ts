import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, filter } from 'rxjs';
import { BlogsService } from 'src/app/service/blogs.service';
import { findAndUplateObjArr } from 'src/app/util/commonMethods';

@Component({
  selector: 'app-dashboardbloglist',
  templateUrl: './dashboardbloglist.component.html',
  styleUrls: ['./dashboardbloglist.component.scss']
})
export class DashboardbloglistComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private blogService: BlogsService) {}
  blogs: any

  ngOnInit(): void {
    this.activatedRoute.data
    .subscribe((res) => {
      this.blogs = res['blogs']
    });
  }
  delete(id: string){
    this.blogService
      .delete(id)
      .subscribe((res) => (this.blogs = res));
  }
  
  toggleHot(id: string){
    this.blogService
    .toggleHot(id)
    .subscribe((res) => (this.blogs = findAndUplateObjArr(this.blogs, res, '_id')));
  }
}
