import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { BlogsService } from 'src/app/service/blogs.service';

@Injectable({
  providedIn: 'root',
})
export class BlogsResolver implements Resolve<boolean> {
  constructor(private blogsService: BlogsService) {}
  requestObj = { limit: 25, page: 1, fields: '_id,title,description,updatedAt, createdAt' };
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.blogsService.getBlogs({
      params: { ...this.requestObj, ...route.params },
    });
  }
}
