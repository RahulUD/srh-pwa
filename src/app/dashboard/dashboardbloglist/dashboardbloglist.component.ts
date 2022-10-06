import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogsService } from 'src/app/service/blogs.service';

@Component({
  selector: 'app-dashboardbloglist',
  templateUrl: './dashboardbloglist.component.html',
  styleUrls: ['./dashboardbloglist.component.scss']
})
export class DashboardbloglistComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private blogService: BlogsService) {}
  blogs: any

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((res) => {
      this.blogs = res['blogs']
    });
  }
  delete(id: string){
    this.blogService
      .delete(id)
      .subscribe((res) => (this.blogs = res));
  }
}
