import {Component, input, OnInit, output} from '@angular/core';
import {Comment} from '../../../core/models/comment';
import {MATERIAL_IMPORTS} from '../../material.imports';
import {DatePipe} from '@angular/common';
import {FormBuilder, FormControl, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-comments',
  imports: [
    MATERIAL_IMPORTS,
    DatePipe,
    ReactiveFormsModule
  ],
  templateUrl: './comments.html',
  styleUrl: './comments.scss',
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
    this.commentControl.reset();
  }
}
