import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
declare var window: any;
@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.scss'],
})
export class ModelComponent {
  constructor() {}

  @Input()
  modelId!: string;
  @Input()
  modelClass = "modal-md";
}
