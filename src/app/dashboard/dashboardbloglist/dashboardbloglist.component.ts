import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogsService } from 'src/app/service/blogs.service';
import { ToastService } from 'src/app/service/toast.service';
import { findAndUplateObjArr } from 'src/app/util/commonMethods';

@Component({
  selector: 'app-dashboardbloglist',
  templateUrl: './dashboardbloglist.component.html',
  styleUrls: ['./dashboardbloglist.component.scss'],
})
export class DashboardbloglistComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private blogService: BlogsService,
    private toastService: ToastService
  ) {}
  blogs: any;
  requestObj = {
    limit: 25,
    page: 1,
    fields: '_id,title,description,updatedAt',
  };
  ngOnInit(): void {
    this.activatedRoute.data.subscribe((res) => {
      this.blogs = res['blogs'];
    });
  }
  delete(id: string) {
    this.blogService.delete(id).subscribe((res) => (this.blogs = res));
    this.toastService.showSuccessToast('Item deleted sucessfully.');
  }

  toggleHot(id: string) {
    this.blogService
      .toggleHot(id)
      .subscribe(
        (res) => (this.blogs = findAndUplateObjArr(this.blogs, res, '_id'))
      );
    this.toastService.showSuccessToast('This is a success toast message.');
  }
  paginationEventHandler(event: number) {
    this.blogService
      .getBlogs({
        params: {
          ...this.requestObj,
          value: 'Latest Jobs',
          page: event,
        },
      })
      .subscribe((res) => {
        this.blogs = res;
      });
  }
}
