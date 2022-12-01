import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { dataCardType } from 'src/types/common';

@Component({
  selector: 'srh-countcard',
  templateUrl: './count-card.component.html',
  styleUrls: ['./count-card.component.scss'],
})
export class CountCardComponent implements OnInit {
  constructor() {}

  @Input()
  data!: dataCardType;

  @Output()
  cardClickEvent = new EventEmitter();

  cardClickEventEventEmitter(value: dataCardType) {
    this.cardClickEvent.emit(value);
  }

  ngOnInit(): void {}
}