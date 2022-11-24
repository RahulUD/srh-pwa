import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { mediaType } from 'src/types/media';

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  constructor(private http: HttpClient) {}
  getMedias() {
    return this.http.get<any>(environment.endPoints.media);
  }
  postMedia(dormData: any){
    return this.http.post<any>(environment.endPoints.media, dormData);
  }
}