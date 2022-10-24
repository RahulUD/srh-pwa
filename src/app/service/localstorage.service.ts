import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class LocalstorageService {
  key = '123';

  constructor() {}

  public saveData(key: string, value: any) {
    localStorage.setItem(key, this.encrypt(value));
  }
  public saveSessionData(key: string, value: any) {
    sessionStorage.setItem(key, this.encrypt(value));
  }

  public getData(key: string) {
    let data = localStorage.getItem(key) || '';
    return this.decrypt(data);
  }
  public getSessionData(key: string) {
    let data = sessionStorage.getItem(key) || '';
    return this.decrypt(data);
  }
  public removeData(key: string) {
    localStorage.removeItem(key);
  }
  public removeSessionData(key: string) {
    localStorage.removeItem(key);
  }
  public removeAllData(key: string) {
    this.removeData(key);
    this.removeSessionData(key);
  }

  public clearData() {
    localStorage.clear();
  }
  public clearSessionData() {
    sessionStorage.clear();
  }
  public clearAllData() {
    this.clearData();
    this.clearSessionData();
  }

  private encrypt(value: any): string {
    if (typeof value == 'string') {
      return value;
    } else {
      return JSON.stringify(value);
    }
  }

  private decrypt(txtToDecrypt: string) {
    return JSON.parse(txtToDecrypt);
  }
}
