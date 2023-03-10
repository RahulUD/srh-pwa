import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { forkJoin, Observable, of } from 'rxjs';
import { BlogsService } from 'src/app/service/blogs.service';

@Injectable({
  providedIn: 'root'
})
export class BlogallResolver implements Resolve<boolean> {
  constructor(private blogsService: BlogsService) {}
  requestObj = {limit: 25, page: 1, fields : '_id,title,description,updatedAt'}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    let result = this.blogsService.getBlogs({
      params: { ...this.requestObj,value: 'Results' },
    });
    let admitCard = this.blogsService.getBlogs({
      params: { ...this.requestObj,value: 'Admit Card' },
    });
    let latestJob = this.blogsService.getBlogs({
      params: { ...this.requestObj,value: 'Latest Jobs' },
    });
    let hots = this.blogsService.getBlogs({
      params: { ...this.requestObj,isHot: true },
    });
    return forkJoin({ result, admitCard, latestJob, hots });
  }
}