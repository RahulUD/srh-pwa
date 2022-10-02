import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { blogMarkdown } from 'src/types/blog';

@Component({
  selector: 'app-blogdetail',
  templateUrl: './blogdetail.component.html',
  styleUrls: ['./blogdetail.component.scss']
})
export class BlogdetailComponent implements OnInit {

  blog!: blogMarkdown;
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(res=> {
      this.blog = res['blogs']
    })
  }
}