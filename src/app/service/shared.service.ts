import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { toastType } from 'src/types/toast';
import { responseType } from 'src/types/user';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor() {}
  appName = environment.appName;
  toasts$ = [
    { title: 'this is title', message: 'This is message' },
    { title: 'this is title', message: 'This is message' },
    { title: 'this is title', message: 'This is message' },
    { title: 'this is title', message: 'This is message' },
    { title: 'this is title', message: 'This is message' },
    { title: 'this is title', message: 'This is message' },
    { title: 'this is title', message: 'This is message' },
    { title: 'this is title', message: 'This is message' },
    { title: 'this is title', message: 'This is message' },
  ];

  private responseSubject = new BehaviorSubject<responseType | null>(null);
  responseObser$: Observable<responseType | null> =
    this.responseSubject.asObservable();
  setResponse(responseType: responseType) {
    this.responseSubject.next(responseType);
  }
  resetResponse() {
    this.responseSubject.next(null);
  }
}
