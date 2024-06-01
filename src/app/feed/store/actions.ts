import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { FeedResInterface } from '../types/feedRes.interface';
import { BackendErrorsInterface } from '../../shared/types/BackendErrors.interface';
import { TagsResInterface } from '../types/tagsRes.interface';
import { SingleArticleRes } from '../types/singleArticleRes.interface';

export const feedActions = createActionGroup({
  source: 'feed',
  events: {
    'Get articles': emptyProps(),
    'Get articles Success': props<{ feed: FeedResInterface }>(),
    'Get articles failure': props<{ errors: BackendErrorsInterface }>(),
    'Get Articles Tags': emptyProps(),
    'Get Articles Tags Success': props<{ tags: TagsResInterface }>(),
    'Get Articles Tags Failure': props<{ errors: BackendErrorsInterface }>(),
    'Filter Articles': props<{ tag: string }>(),
    'Delete Filtered Articles': emptyProps(),
    'Get Single Article': props<{ slug: string }>(),
    'Get Single Article Success': props<{ article: SingleArticleRes }>(),
    'Get Single Article Failure': props<{ errors: BackendErrorsInterface }>(),
  },
});
