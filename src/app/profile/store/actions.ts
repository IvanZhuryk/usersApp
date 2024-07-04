import { createActionGroup, props } from '@ngrx/store';
import { ProfileInterface } from '../../shared/types/profile.interface';
import { BackendErrorsInterface } from '../../shared/types/BackendErrors.interface';
import { FeedResInterface } from '../../feed/types/feedRes.interface';

export const profileActions = createActionGroup({
  source: 'profile',
  events: {
    'Get profile': props<{ username: string }>(),
    'Get profile Success': props<{ profile: ProfileInterface }>(),
    'Get profile Failure': props<{ errors: BackendErrorsInterface }>(),
    'Get users articles': props<{ username: string }>(),
    'Get users articles Success': props<{ articles: FeedResInterface }>(),
    'Get users artciles Failure': props<{ errors: BackendErrorsInterface }>(),
    'Post Follow User': props<{ username: string }>(),
    'Post Follow User Success': props<{ profile: ProfileInterface }>(),
    'Post Follow User Failure': props<{ errors: BackendErrorsInterface }>(),
  },
});
