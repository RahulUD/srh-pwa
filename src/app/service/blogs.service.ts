import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  constructor(private http: HttpClient) {}
  getBlogs(params: any) {
    return this.http.get<any>(environment.endPoints.blogs, params);
  }
  getBlog(blogId: any) {
    return this.http.get<any>(`${environment.endPoints.blogs}/${blogId.blogId}`);
  }
}
