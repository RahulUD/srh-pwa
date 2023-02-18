import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { baseSyllabus } from 'src/types/syllabus';

@Injectable({
  providedIn: 'root'
})
export class SyllabusService {
  constructor(private http: HttpClient) {}
  get(params: any) {
    return this.http.get<baseSyllabus[]>(environment.endPoints.syllabuses, params);
  }
  getById(_id: string) {
    return this.http.get<baseSyllabus>(`${environment.endPoints.syllabuses}/${_id}`);
  }
  delete(id: string){
    return this.http.delete<baseSyllabus>(`${environment.endPoints.syllabuses}/${id}`);
  }
  save(formData: any){
    return this.http.post<baseSyllabus>(`${environment.endPoints.syllabuses}`, formData);
  }
  
  update(formData: any){
    return this.http.patch<baseSyllabus>(`${environment.endPoints.syllabuses}/${formData._id}`, formData);
  }
}