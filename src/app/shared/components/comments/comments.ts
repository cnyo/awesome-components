import {Component, input, OnInit, output} from '@angular/core';
import {Comment} from '../../../core/models/comment';
import {MATERIAL_IMPORTS} from '../../material.imports';
import {FormBuilder, FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {TimeAgoPipe} from '../../pipes/time-ago.pipe';

@Component({
  selector: 'app-comments',
  imports: [
    MATERIAL_IMPORTS,
    ReactiveFormsModule,
    TimeAgoPipe
  ],
  templateUrl: './comments.html',
  styleUrl: './comments.scss'
})
export class Comments implements OnInit {
  comments = input<Comment[]>([]);
  commentControl!: FormControl;
  newComment = output<string>();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.commentControl = this.formBuilder.control('', [
      Validators.required,
      Validators.minLength(10)
    ]);
  }

  protected onLeaveComments() {
    this.newComment.emit(this.commentControl.value);
    const maxId = Math.max(...this.comments().map(comment => comment.id));
    this.comments().unshift({
      id: maxId + 1,
      userId: 1,
      comment: this.commentControl.value,
      createdDate: new Date().toISOString()
    });
    this.commentControl.reset();
  }
}
