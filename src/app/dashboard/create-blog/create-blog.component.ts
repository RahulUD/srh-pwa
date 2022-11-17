import { HttpEvent } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BlogsService } from 'src/app/service/blogs.service';
import { CategoryService } from 'src/app/service/category.service';
import { baseCategory } from 'src/types/category';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.scss'],
})
export class CreateBlogComponent implements OnInit {
  constructor(private blogService: BlogsService, private categoryService : CategoryService) {}
  blogs!: any;
  seos:string[] = []
  blogTypes!: any
  preview = '1'
  ngOnInit(): void {
    this.categoryService.getCategories({params:{cat1: "BlogType"}}).subscribe(res=>this.blogTypes = res)
  }

  blogForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    markdown: new FormControl(''),
    category : new FormControl(''),
    seo : new FormControl(''),
  });

  save() {
    this.blogService
      .save({...this.blogForm.value, seo: this.seos})
      .subscribe((res) => (this.blogs = res));
  }
  discard(index: number){
    this.seos.splice(index, 1);
  }
  discardBlog(){
    this.blogForm.reset()
  }
  addSeo(event: KeyboardEvent){
    if(this.blogForm.controls.seo.value && event.code === 'Enter'){
      this.seos.push(this.blogForm.controls.seo.value)
      this.blogForm.controls.seo.setValue('')
    }
  }
  previewHandle(isPreview: string){
    this.preview = isPreview
  }
}
