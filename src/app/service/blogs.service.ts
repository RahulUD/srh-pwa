import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {baseBlog, blogMarkdown} from './../../types/blog'
@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  constructor(private http: HttpClient) {}
  getBlogs(params: any) {
    return this.http.get<baseBlog[]>(environment.endPoints.blogs, params);
  }
  getBlog(blogId: string) {
    return this.http.get<blogMarkdown>(`${environment.endPoints.blogs}/${blogId}`);
  }
}
