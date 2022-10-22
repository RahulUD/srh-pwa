import { Injectable } from '@angular/core';
import { modelType} from 'src/types/model';
@Injectable({
  providedIn: 'root'
})
export class DialogueService {

  modelEvent: Observable<modelType>;
  private _modelEvents = new Subject<modelType>();

  constructor() {
    this.modelEvent = this._modelEvents.asObservable();
  }

}
