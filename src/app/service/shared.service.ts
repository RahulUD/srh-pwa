import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { toastType } from 'src/types/toast';

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
}
