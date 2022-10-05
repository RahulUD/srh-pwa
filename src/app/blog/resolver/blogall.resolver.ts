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
  requestObj = {type: 'result', limit: 25, page: 1, fields : '_id,title,description'}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    let result = this.blogsService.getBlogs({
      params: { ...this.requestObj,type: 'result' },
    });
    let admitCard = this.blogsService.getBlogs({
      params: { ...this.requestObj,type: 'admit-card' },
    });
    let latestJob = this.blogsService.getBlogs({
      params: { ...this.requestObj,type: 'latest-job' },
    });
    return forkJoin({ result, admitCard, latestJob });
  }
}