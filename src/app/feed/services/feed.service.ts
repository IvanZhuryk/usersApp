import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { FeedResInterface } from '../types/feedRes.interface';
import { TagsResInterface } from '../types/tagsRes.interface';
import { SingleArticleRes } from '../types/singleArticleRes.interface';
import { ArticleInterface } from '../types/article.interface';

@Injectable({ providedIn: 'root' })
export class FeedService {
  constructor(private http: HttpClient) {}
  getArticles(): Observable<FeedResInterface> {
    const url = 'https://api.realworld.io/api/articles';

    return this.http
      .get<FeedResInterface>(url, {
        params: {
          limit: 100,
        },
      })
      .pipe(map((res) => res));
  }
  getTags(): Observable<TagsResInterface> {
    const url = 'https://api.realworld.io/api/tags';
    return this.http.get<TagsResInterface>(url).pipe(map((res) => res));
  }
  getSingleArticle(slug: string): Observable<SingleArticleRes> {
    const url = `https://api.realworld.io/api/articles/${slug}`;
    return this.http.get<SingleArticleRes>(url).pipe(map((res) => res));
  }
  postFavoriteArticle(
    slug: string,
    favorite: boolean
  ): Observable<SingleArticleRes> {
    const url = `https://api.realworld.io/api/articles/${slug}/favorite`;
    if (favorite) {
      return this.http.delete<SingleArticleRes>(url).pipe(map((res) => res));
    } else {
      return this.http
        .post<SingleArticleRes>(url, null)
        .pipe(map((res) => res));
    }
  }
}
