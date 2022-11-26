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
  getBlog(id: string) {
    return this.http.get<blogMarkdown>(`${environment.endPoints.blogs}/${id}`);
  }
  delete(id: string){
    return this.http.delete<baseBlog>(`${environment.endPoints.blogs}/${id}`);
  }
  save(formData: any){
    return this.http.post<baseBlog>(`${environment.endPoints.blogs}`, formData);
  }
  getHot(){
    return this.http.get<baseBlog[]>(`${environment.endPoints.blogs}/hotblog/get`);
  }
  toggleHot(id: string){
    return this.http.get<baseBlog>(`${environment.endPoints.blogs}/hotblog/toggle/${id}`);
  }
  update(formData: any){
    return this.http.patch<baseBlog>(`${environment.endPoints.blogs}/${formData._id}`, formData);
  }
}