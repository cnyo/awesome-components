import {Component, Input} from '@angular/core';
import {Post} from '../../models/post';
import {DatePipe, TitleCasePipe} from '@angular/common';
import {MATERIAL_IMPORTS} from '../../../shared/material.imports';
import {Comments} from '../../../shared/components/comments/comments';

@Component({
  selector: 'app-post-list-item',
  imports: [
    TitleCasePipe,
    DatePipe,
    ...MATERIAL_IMPORTS,
    Comments
  ],
  templateUrl: './post-list-item.html',
  styleUrl: './post-list-item.scss',
})
export class PostListItem {
  @Input() post!: Post;
}
