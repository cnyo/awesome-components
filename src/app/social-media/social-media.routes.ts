import {PostListComponent} from './components/post-list/post-list.component';
import { Routes} from '@angular/router';
import {postsResolver} from './resolvers/posts.resolver';
import {PostsService} from './services/posts.service';
import {provideHttpClient} from '@angular/common/http';

export const socialMediaRoutes: Routes = [
  {
    path: '',
    component: PostListComponent,
    resolve: {
      posts: postsResolver
    },
    providers: [
      PostsService,
      provideHttpClient()
    ]
  }
];
