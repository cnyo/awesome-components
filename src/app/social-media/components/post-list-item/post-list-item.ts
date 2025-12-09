import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../models/post';
import {TitleCasePipe} from '@angular/common';

@Component({
  selector: 'app-post-list-item',
  imports: [
    TitleCasePipe
  ],
  templateUrl: './post-list-item.html',
  styleUrl: './post-list-item.scss',
})
export class PostListItem {
  @Input() post!: Post;
}
