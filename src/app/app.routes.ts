import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: 'social-media',
    loadChildren: () =>
      import('./social-media/social-media.routes')
        .then(r => r.socialMediaRoutes),
  },
  {
    path: '**',
    redirectTo: '/social-media',
    pathMatch: 'full'
  }
]
