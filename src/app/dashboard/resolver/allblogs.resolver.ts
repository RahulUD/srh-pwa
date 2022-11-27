import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { BlogsService } from 'src/app/service/blogs.service';
import { baseBlog } from 'src/types/blog';

@Injectable({
  providedIn: 'root'
})
export class AllblogsResolver implements Resolve<baseBlog[]> {
  constructor(private blogsService: BlogsService){}
  requestObj = {fields : '_id,title,description,isHot, isDeleted'}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.blogsService.getBlogs({
      params: this.requestObj,
    });
  }
}
