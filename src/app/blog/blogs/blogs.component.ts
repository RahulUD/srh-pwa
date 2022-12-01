import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { paginationConfigType } from 'src/types/common';
@Component({
  selector: 'blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss'],
})
export class BlogsComponent implements OnInit, OnChanges {
  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    this.paginationConfig = this.blogs.pagination
  }
  @Output()
  paginationEvent = new EventEmitter<number>();
  @Input()
  icon!: string;
  @Input()
  groupTitle!: string;
  @Input()
  blogs : any
  ngOnInit(): void {}
  paginationConfig!: paginationConfigType

  paginationEventEmitter(value: number) {
    this.paginationEvent.emit(value);
  }
}
