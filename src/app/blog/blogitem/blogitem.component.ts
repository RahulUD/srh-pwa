import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'blog-item',
  templateUrl: './blogitem.component.html',
  styleUrls: ['./blogitem.component.scss'],
})
export class BlogitemComponent implements OnInit {
  textClass = '';
  @Input()
  blog!: { title: string; description: string; _id: string, updatedAt: string };
  constructor() {}

  ngOnInit(): void {}
}
