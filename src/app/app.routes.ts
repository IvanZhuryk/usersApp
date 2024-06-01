import { Routes } from '@angular/router';
import { canActivate } from './shared/guards/authGuard';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('../app/auth/auth.routes').then((m) => m.RegisterRoutes),
  },
  {
    path: 'feed',
    loadChildren: () =>
      import('../app/feed/feed.routes').then((m) => m.FeedRoutes),
    canActivate: [canActivate],
  },
];
