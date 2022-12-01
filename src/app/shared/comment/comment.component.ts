import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/service/auth.service';
import { CommentService } from 'src/app/service/comment.service';
import { SharedService } from 'src/app/service/shared.service';
import { baseComment, responseComment } from 'src/types/comment';
import { baseUser } from 'src/types/user';

@Component({
  selector: 'srh-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
})
export class CommentComponent implements OnInit {
  user!: baseUser;
  constructor(
    private commentService: CommentService,
    private authService: AuthService
  ) {
    this.authService.authUser$.subscribe((user) => {
      if (user) {
        this.user = user;
      }
    });
  }
  @Input()
  blogId!: string;

  comments!: responseComment[];

  ngOnInit(): void {
    this.commentService
      .getAll(this.blogId)
      .subscribe((res) => (this.comments = res));
  }

  commentHandler(comment: string) {
    this.commentService
      .save({ user: this.user._id, blog: this.blogId, comment })
      .subscribe((res) => {
        if (res) {
          this.comments = [res,...this.comments, ];
        }
      });
  }
}
