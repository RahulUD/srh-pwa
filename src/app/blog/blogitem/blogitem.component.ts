import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'blog-item',
  templateUrl: './blogitem.component.html',
  styleUrls: ['./blogitem.component.scss'],
})
export class BlogitemComponent implements OnInit {
  icons = ['bi-caret-right-fill'];
  textClass = '';
  @Input()
  blog!: { title: string; description: string; _id: string };
  constructor() {}

  ngOnInit(): void {}
}
