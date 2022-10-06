import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BlogsService } from 'src/app/service/blogs.service';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.scss'],
})
export class CreateBlogComponent implements OnInit {
  constructor(private blogService: BlogsService) {}
  blogs!: any;
  ngOnInit(): void {}

  blogForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    markdown: new FormControl(''),
  });

  save() {
    this.blogService
      .save(this.blogForm.value)
      .subscribe((res) => (this.blogs = res));
  }
}
