import {inject} from '@angular/core';
import {ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot} from '@angular/router';
import {Post} from '../models/post';
import {PostsService} from '../services/posts.service';

export const postsResolver: ResolveFn<Post[]> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const postsService = inject(PostsService);
  return postsService.getPosts();
};
