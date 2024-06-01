import { BackendErrorsInterface } from '../../shared/types/BackendErrors.interface';
import { ArticleInterface } from './article.interface';
import { SingleArticleRes } from './singleArticleRes.interface';

export interface FeedInterface {
  isSubmitting: boolean;
  isLoading: boolean;
  filteredArticles: ArticleInterface[] | null | undefined;
  articles: ArticleInterface[] | null | undefined;
  articlesCount: number | null | undefined;
  validationErrors: BackendErrorsInterface | null;
  tags: string[] | null | undefined;
  article: SingleArticleRes | null | undefined;
}
