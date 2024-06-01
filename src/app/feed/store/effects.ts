import { inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { FeedService } from '../services/feed.service';
import { feedActions } from './actions';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { FeedResInterface } from '../types/feedRes.interface';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { TagsResInterface } from '../types/tagsRes.interface';
import { SingleArticleRes } from '../types/singleArticleRes.interface';

export const getFeedEffect = createEffect(
  (action$ = inject(Actions), feedService = inject(FeedService)) => {
    return action$.pipe(
      ofType(feedActions.getArticles),
      switchMap(() => {
        return feedService.getArticles().pipe(
          map((feed: FeedResInterface) => {
            return feedActions.getArticlesSuccess({ feed });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              feedActions.getArticlesFailure({
                errors: errorResponse.error.errors,
              })
            );
          })
        );
      })
    );
  },
  { functional: true }
);
export const redirectAfterGetFeedFailure = createEffect(
  (actions$ = inject(Actions), router = inject(Router)) => {
    return actions$.pipe(
      ofType(feedActions.getArticlesFailure),
      tap(() => {
        router.navigateByUrl('/auth');
      })
    );
  },
  { functional: true, dispatch: false }
);
export const getTagsEffect = createEffect(
  (action$ = inject(Actions), feedService = inject(FeedService)) => {
    return action$.pipe(
      ofType(feedActions.getArticlesTags),
      switchMap(() => {
        return feedService.getTags().pipe(
          map((tags: TagsResInterface) => {
            return feedActions.getArticlesTagsSuccess({ tags });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              feedActions.getArticlesTagsFailure({
                errors: errorResponse.error.errors,
              })
            );
          })
        );
      })
    );
  },
  { functional: true }
);
export const getSingleArticleEffect = createEffect(
  (actions$ = inject(Actions), feedService = inject(FeedService)) => {
    return actions$.pipe(
      ofType(feedActions.getSingleArticle),
      switchMap(({ slug }) => {
        return feedService.getSingleArticle(slug).pipe(
          map((article: SingleArticleRes) => {
            return feedActions.getSingleArticleSuccess({ article });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              feedActions.getSingleArticleFailure({
                errors: errorResponse.error.errors,
              })
            );
          })
        );
      })
    );
  },
  { functional: true }
);
