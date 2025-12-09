import {Component, inject} from '@angular/core';
import {PostListItem} from '../post-list-item/post-list-item';
import {map} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {AsyncPipe} from '@angular/common';

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
  private route = inject(ActivatedRoute);
  posts$ = this.route.data.pipe(
    map(data => data['posts']),
  );
}
