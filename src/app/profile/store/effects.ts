import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProfileService } from '../service/profile.service';
import { profileActions } from './actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { ProfileInterface } from '../../shared/types/profile.interface';
import { HttpErrorResponse } from '@angular/common/http';
import { FeedResInterface } from '../../feed/types/feedRes.interface';
import { ProfileResInterface } from '../types/profileRes.Interface';

export const getProfileEffect = createEffect(
  (actions$ = inject(Actions), profileservice = inject(ProfileService)) => {
    return actions$.pipe(
      ofType(profileActions.getProfile),
      switchMap(({ username }) => {
        return profileservice.getProfile(username).pipe(
          map((profile: ProfileInterface) => {
            return profileActions.getProfileSuccess({ profile });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              profileActions.getProfileFailure({
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
export const getUsersArticlesEffect = createEffect(
  (actions$ = inject(Actions), profileservice = inject(ProfileService)) => {
    return actions$.pipe(
      ofType(profileActions.getUsersArticles),
      switchMap(({ username }) => {
        return profileservice.getUsersArticles(username).pipe(
          map((articles: FeedResInterface) => {
            return profileActions.getUsersArticlesSuccess({ articles });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              profileActions.getUsersArtcilesFailure({
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
export const postFollowUserEffect = createEffect(
  (actions$ = inject(Actions), profileservice = inject(ProfileService)) => {
    return actions$.pipe(
      ofType(profileActions.postFollowUser),
      switchMap(({ username, follow }) => {
        return profileservice.postFollowUser(username, follow).pipe(
          map((profile: ProfileInterface) => {
            return profileActions.postFollowUserSuccess({ profile });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              profileActions.postFollowUserFailure({
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
