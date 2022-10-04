import { Component, OnInit, Output,Input, EventEmitter  } from '@angular/core';
declare var window: any;
@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.scss'],
})
export class ModelComponent implements OnInit {
  constructor() {}

  @Input()
  modelId!: string;

  formModel: any;
  ngOnInit(): void {
    this.formModel = new window.bootstrap.Modal(
      '#exampleModal', {backdrop : true, focus: true, keyboard : true}
    )
  }
  openModel(){
    this.formModel.show()
  }
  closeModel(){
    this.formModel.hide()
  }
}
