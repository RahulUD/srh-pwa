import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { baseComment, responseComment } from 'src/types/comment';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  constructor(private http: HttpClient) {}

  getAll(params: any) {
    return this.http.get<responseComment[]>(environment.endPoints.comment+'/'+ params);
  }
  save(formData: any) {
    return this.http.post<responseComment>(
      `${environment.endPoints.comment}`,
      formData
    );
  }
}
