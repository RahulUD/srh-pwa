import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { countType } from 'src/types/common';

@Injectable({
  providedIn: 'root'
})
export class CountDataService {

  constructor(private http: HttpClient) {}
  getDataCounts(params: any) {
    return this.http.get<countType[]>(`${environment.endPoints.blogs}\\count`, params);
  }
}
