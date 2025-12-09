import {PostListComponent} from './components/post-list/post-list.component';
import {Routes} from '@angular/router';
import {PostsService} from './services/posts.service';

export const socialMediaRoutes: Routes = [
  {
    path: '',
    component: PostListComponent,
    providers: [
      PostsService,
    ]
  }
];
