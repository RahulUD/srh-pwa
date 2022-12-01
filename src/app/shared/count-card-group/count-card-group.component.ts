import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { dataCardType } from 'src/types/common';

@Component({
  selector: 'srh-countcard-group',
  templateUrl: './count-card-group.component.html',
  styleUrls: ['./count-card-group.component.scss']
})
export class CountCardGroupComponent implements OnInit {

  constructor() { }

  @Input()
  countCardData !: dataCardType[]

  @Output()
  cardItemClickEvent = new EventEmitter<dataCardType>();
 
  cardItemClickEventEmitter(value: dataCardType) {
    this.cardItemClickEvent.emit(value);
  }
  ngOnInit(): void {
  }
}
