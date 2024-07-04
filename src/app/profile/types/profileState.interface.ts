import { ArticleInterface } from '../../feed/types/article.interface';
import { BackendErrorsInterface } from '../../shared/types/BackendErrors.interface';
import { ProfileInterface } from './../../shared/types/profile.interface';
export interface ProfileStateInterface {
  isSubmitting: boolean;
  profile: ProfileInterface | null | undefined;
  validationErrors: BackendErrorsInterface | null;
  usersArticles: ArticleInterface[] | null | undefined;
  usersArticlesCount: number | undefined | null;
}
