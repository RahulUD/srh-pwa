import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
  Output,
  EventEmitter,
} from '@angular/core';
import { pagination } from 'src/app/util/commonMethods';
import {
  paginationTypeType,
  paginationTypeEnum,
  paginationConfigType,
  numberKeyValue,
} from 'src/types/common';

@Component({
  selector: 'srh-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit, OnChanges {
  paginationTypeEnum = paginationTypeEnum;
  @Input()
  paginationType: paginationTypeType = this.paginationTypeEnum.standard;

  @Input()
  paginationConfig!: paginationConfigType;

  @Output()
  paginationClickEvent = new EventEmitter<number>();

  pages!: numberKeyValue[];

  totalPages!: number;
  constructor() {}
  paginationClickEventEmitter(value: number) {
    this.paginationClickEvent.emit(value);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.totalPages = Math.ceil(
      Number(this.paginationConfig.totalItem) /
        Number(this.paginationConfig.perPage)
    );
    this.pages = pagination(
      Number(this.paginationConfig.currentPage),
      this.totalPages,
      3,
      '...'
    );
  }
  ngOnInit(): void {}
}
