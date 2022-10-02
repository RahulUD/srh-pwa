import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { BlogsService } from 'src/app/service/blogs.service';
import { blogMarkdown } from 'src/types/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogResolver implements Resolve<blogMarkdown> {
  constructor(private blogsService: BlogsService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<blogMarkdown> {
    return this.blogsService.getBlog(route.params['id'])
  }
}
