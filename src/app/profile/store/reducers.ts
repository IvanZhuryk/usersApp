import { profileActions } from './actions';
import { createFeature, createReducer, on } from '@ngrx/store';
import { ProfileStateInterface } from '../types/profileState.interface';

const initialState: ProfileStateInterface = {
  isSubmitting: false,
  validationErrors: null,
  profile: undefined,
  usersArticles: undefined,
  usersArticlesCount: undefined,
};
const profileFeature = createFeature({
  name: 'profile',
  reducer: createReducer(
    initialState,
    on(profileActions.getProfile, (state) => ({
      ...state,
      isSubmitting: true,
      validationErrors: null,
    })),
    on(profileActions.getProfileSuccess, (state, action) => ({
      ...state,
      isSubmitting: false,
      profile: action.profile,
    })),
    on(profileActions.getProfileFailure, (state, action) => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors,
    })),
    on(profileActions.getUsersArticles, (state) => ({
      ...state,
      isSubmitting: true,
      validationErrors: null,
    })),
    on(profileActions.getUsersArticlesSuccess, (state, action) => ({
      ...state,
      isSubmitting: false,
      usersArticles: action.articles.articles,
      usersArticlesCount: action.articles.articlesCount,
    })),
    on(profileActions.getUsersArtcilesFailure, (state, action) => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors,
    })),
    on(profileActions.postFollowUser, (state) => ({
      ...state,
      isSubmitting: true,
      validationErrors: null,
    })),
    on(profileActions.postFollowUserSuccess, (state, action) => ({
      ...state,
      isSubmitting: false,
      profile: action.profile,
    })),
    on(profileActions.postFollowUserFailure, (state, action) => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors,
    }))
  ),
});
export const {
  name: profileFeatureKey,
  reducer: profileReducer,
  selectIsSubmitting,
  selectProfile,
  selectValidationErrors,
  selectUsersArticles,
  selectUsersArticlesCount,
} = profileFeature;
