import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BlogsService } from 'src/app/service/blogs.service';
import { CategoryService } from 'src/app/service/category.service';
import { blogMarkdown } from 'src/types/blog';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.scss'],
})
export class CreateBlogComponent implements OnInit {
  constructor(
    private blogService: BlogsService,
    private categoryService: CategoryService,
    private activatedRoute: ActivatedRoute
  ) {}
  blogs!: any;
  seos: string[] = [];
  blogTypes!: any;
  preview = '1';
  blog!: blogMarkdown;
  ngOnInit(): void {
    this.categoryService
      .getCategories({ params: { cat1: 'BlogType' } })
      .subscribe((res) => (this.blogTypes = res));

    this.activatedRoute.data.subscribe((res) => {
      this.blog = res['blogs'];
      if(this.blog !== null){
        this.blogForm.controls.title.setValue(this.blog.title)
        this.blogForm.controls.description.setValue(this.blog.description)
        this.blogForm.controls.markdown.setValue(this.blog.markdown)
        this.blogForm.controls.category.setValue(this.blog.category)
        this.seos=this.blog.seo
      }
    });
  }

  blogForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    markdown: new FormControl(''),
    category: new FormControl(''),
    seo: new FormControl(''),
  });

  save() {
    this.blogService
      .save({ ...this.blogForm.value, seo: this.seos })
      .subscribe((res) => (this.blogs = res));
  }
  discard(index: number) {
    this.seos.splice(index, 1);
  }
  discardBlog() {
    this.blogForm.reset();
  }
  addSeo(event: KeyboardEvent) {
    if (this.blogForm.controls.seo.value && event.code === 'Enter') {
      this.seos.push(this.blogForm.controls.seo.value);
      this.blogForm.controls.seo.setValue('');
    }
  }
  previewHandle(isPreview: string) {
    this.preview = isPreview;
  }
  updateBlog(){
    this.blogService
      .update({...this.blog, ...this.blogForm.value, updatedAt: undefined, seo: this.seos})
      .subscribe((res: any) => (this.blogs = res));
  }
}
