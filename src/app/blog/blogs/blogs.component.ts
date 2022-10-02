import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss'],
})
export class BlogsComponent implements OnInit {
  constructor() {}
  @Input()
  icon!: string;
  @Input()
  groupTitle!: string;
  @Input()
  blogs : [] | undefined
  ngOnInit(): void {}
}
