import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/service/auth.service';
import { CommentService } from 'src/app/service/comment.service';
import { LikeService } from 'src/app/service/like.service';
import { responseComment, responseLikeType } from 'src/types/comment';
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
    private likeService: LikeService,
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

  comments: responseComment[] | null | undefined;
  likes: responseLikeType[] | null | undefined;

  ngOnInit(): void {
    this.commentService
      .getAll(this.blogId)
      .subscribe((res) => (this.comments = res));

    this.likeService.getAll(this.blogId).subscribe((res) => (this.likes = res));
  }

  commentHandler(comment: string) {
    this.commentService
      .save({ user: this.user._id, blog: this.blogId, comment })
      .subscribe((res) => {
        if (res) {
          if (this.comments) this.comments = [res, ...this.comments];
        }
      });
  }
  likeclickHandler() {
    if (this.user) {
      this.likeService
        .save({ user: this.user._id, blog: this.blogId })
        .subscribe((res) => {
          if (res) {
            this.likes = res;
          }
        });
    }
  }
  ifILiked() {
    if (this.user) {
      return !!this.likes?.filter((like) => (like.user._id == this.user._id))[0];
    }
    return false;
  }
}
