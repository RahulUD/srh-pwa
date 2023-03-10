import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'new-comment',
  templateUrl: './new-comment.component.html',
  styleUrls: ['./new-comment.component.scss'],
})
export class NewCommentComponent implements OnInit {
  comment = new FormControl('');

  @Input()
  avatar!: string;

  @Output()
  commentSaveClickEvent = new EventEmitter<string>();
  commentSaveEventEmitter() {
    if (this.comment.value) {
      this.commentSaveClickEvent.emit(this.comment.value);
      this.comment.reset();
    }
  }
  ngOnInit(): void {}
}
