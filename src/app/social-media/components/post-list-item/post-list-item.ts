import {Component, Input, output} from '@angular/core';
import {Post} from '../../models/post';
import {TitleCasePipe} from '@angular/common';
import {MATERIAL_IMPORTS} from '../../../shared/material.imports';
import {Comments} from '../../../shared/components/comments/comments';
import {ShortenPipe} from '../../../shared/pipes/shorten.pipe';
import {TimeAgoPipe} from '../../../shared/pipes/time-ago.pipe';

@Component({
  selector: 'app-post-list-item',
  imports: [
    TitleCasePipe,
    ...MATERIAL_IMPORTS,
    Comments,
    ShortenPipe,
    TimeAgoPipe
  ],
  templateUrl: './post-list-item.html',
  styleUrl: './post-list-item.scss',
})
export class PostListItem {
  @Input() post!: Post;
  postCommented = output<{ comment: string, postId: number }>();

  onNewComment(comment: string) {
    this.postCommented.emit({comment, postId: this.post.id});
  }
}
