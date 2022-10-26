import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { baseBlog } from 'src/types/blog';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  blogType!: string;
  blogs!: baseBlog[]
  ngOnInit() {
    this.route.params.subscribe((data) => {
      this.blogType = data['value'];
    });
    this.route.data.subscribe(blogs  => {
      this.blogs = blogs['blogs']
      console.log(blogs['blogs'])
    });
  }
}
