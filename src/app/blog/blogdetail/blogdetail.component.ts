import { Component, OnInit , ViewEncapsulation} from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { blogMarkdown } from 'src/types/blog';
import { Title, Meta } from '@angular/platform-browser';
import { humanDate } from 'src/app/util/commonMethods';
import { compareDate } from 'src/app/util/commonMethods';
@Component({
  selector: 'app-blogdetail',
  templateUrl: './blogdetail.component.html',
  styleUrls: ['./blogdetail.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BlogdetailComponent implements OnInit {
  blog!: blogMarkdown;
  humanDate = humanDate
  compareDate =compareDate
  constructor(
    private activatedRoute: ActivatedRoute,
    private title: Title,
    private meta: Meta,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((res) => {
      this.blog = res['blogs'];
      this.title.setTitle(this.blog.title);
      this.addSeo(this.blog.seo, this.blog.title, this.blog.description);
      this.router.events.subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
            return;
        }
        window.scrollTo(0, 0)
    });
    });
  }

  addSeo(seos: string[], title: string, description: string) {
    this.meta.addTags([
      { name: 'description', content: description },
      { name: 'keywords', content: `${title}, ${seos.toString()}` },
    ]);
  }
}