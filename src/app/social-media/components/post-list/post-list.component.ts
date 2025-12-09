import {Component, inject} from '@angular/core';
import {PostListItem} from '../post-list-item/post-list-item';
import {AsyncPipe} from '@angular/common';
import {PostsService} from '../../services/posts.service';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [
    PostListItem,
    AsyncPipe
  ],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss',
})
export class PostListComponent {
  private postsService = inject(PostsService);
  posts$ = this.postsService.getPosts();
}
