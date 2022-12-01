import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
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
    console.log('this.paginationConfig = this.blogs.pagination',this.paginationConfig)
  }
  @Input()
  icon!: string;
  @Input()
  groupTitle!: string;
  @Input()
  blogs : any
  ngOnInit(): void {}
  paginationConfig!: paginationConfigType

  jobsPaginationEventHandler(event: any){
    console.log("emitted>>>>>>>>>>>>>>", event)
  }
}
