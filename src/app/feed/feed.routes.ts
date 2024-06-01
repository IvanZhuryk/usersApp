import { Route } from '@angular/router';
import { FeedComponent } from './components/feed/feed.components';
import { ArticlePageComponent } from './components/articlePage/articlePage.component';

export const FeedRoutes: Route[] = [
  {
    path: '',
    component: FeedComponent,
  },
  {
    path: ':slug',
    component: ArticlePageComponent,
  },
];
