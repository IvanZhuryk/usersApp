import { createFeature, createReducer, on } from '@ngrx/store';
import { FeedInterface } from '../types/feedState.interface';
import { feedActions } from './actions';

const initialState: FeedInterface = {
  isSubmitting: false,
  isLoading: false,
  validationErrors: null,
  articles: undefined,
  articlesCount: undefined,
  filteredArticles: undefined,
  tags: undefined,
  article: undefined,
};
const feedFeature = createFeature({
  name: 'feed',
  reducer: createReducer(
    initialState,
    on(feedActions.getArticles, (state) => ({
      ...state,
      isSubmitting: true,
      validationErrors: null,
    })),
    on(feedActions.getArticlesSuccess, (state, action) => ({
      ...state,
      isSubmitting: false,
      articles: action.feed.articles,
      articlesCount: action.feed.articlesCount,
    })),
    on(feedActions.getArticlesFailure, (state, action) => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors,
    })),
    on(feedActions.getArticlesTags, (state) => ({
      ...state,
      isLoading: true,
      validationErrors: null,
    })),
    on(feedActions.getArticlesTagsSuccess, (state, action) => ({
      ...state,
      isLoading: false,
      tags: action.tags.tags,
    })),
    on(feedActions.getArticlesTagsFailure, (state, action) => ({
      ...state,
      isLoading: false,
      validationErrors: action.errors,
    })),
    on(feedActions.filterArticles, (state, action) => ({
      ...state,
      filteredArticles: state.articles?.filter((article) =>
        article.tagList.includes(action.tag)
      ),
    })),
    on(feedActions.deleteFilteredArticles, (state) => ({
      ...state,
      filteredArticles: undefined,
    })),
    on(feedActions.getSingleArticle, (state) => ({
      ...state,
      isSubmitting: true,
      validationErrors: null,
    })),
    on(feedActions.getSingleArticleSuccess, (state, action) => ({
      ...state,
      isSubmitting: false,
      article: action.article.article,
    })),
    on(feedActions.getSingleArticleFailure, (state, action) => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors,
    })),
    on(feedActions.postFavoriteAtricle, (state) => ({
      ...state,
      isSubmitting: true,
      validationErrors: null,
    })),
    on(feedActions.postFavoriteAtricleSuccess, (state, action) => ({
      ...state,
      isSubmitting: false,
      article: action.article.article,
    })),
    on(feedActions.postFavoriteArticleFailure, (state, action) => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors,
    }))
  ),
});
export const {
  name: feedFeatureKey,
  reducer: feedReducer,
  selectIsSubmitting,
  selectArticles,
  selectArticlesCount,
  selectValidationErrors,
  selectTags,
  selectFilteredArticles,
  selectArticle,
} = feedFeature;
