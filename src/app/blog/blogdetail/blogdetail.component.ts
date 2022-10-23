import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { blogMarkdown } from 'src/types/blog';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-blogdetail',
  templateUrl: './blogdetail.component.html',
  styleUrls: ['./blogdetail.component.scss'],
})
export class BlogdetailComponent implements OnInit {
  blog!: blogMarkdown;
  constructor(
    private activatedRoute: ActivatedRoute,
    private title: Title,
    private meta: Meta
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((res) => {
      this.blog = res['blogs'];
      this.title.setTitle(this.blog.title);
      this.addSeo(this.blog.seo, this.blog.title, this.blog.description);
    });
  }

  addSeo(seos: string[], title: string, description: string) {
    this.meta.addTags([
      { name: 'description', content: description },
      { name: 'keywords', content: `${title}, ${seos.toString()}` },
    ]);
  }
}