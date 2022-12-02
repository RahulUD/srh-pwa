import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { responseComment, responseLikeType } from 'src/types/comment';

@Injectable({
  providedIn: 'root'
})
export class LikeService {

  constructor(private http: HttpClient) {}

  getAll(params: any) {
    return this.http.get<responseLikeType[]>(environment.endPoints.like+'/'+ params);
  }
  save(formData: any) {
    return this.http.post<responseLikeType[]>(
      `${environment.endPoints.like}`,
      formData
    );
  }
}
