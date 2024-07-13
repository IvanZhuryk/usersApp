import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { feedActions } from '../../store/actions';
import { selectArticle } from '../../store/reducers';
import { MatIconModule } from '@angular/material/icon';
import { profileActions } from '../../../profile/store/actions';
import { combineLatest } from 'rxjs';
import { selectProfile } from '../../../profile/store/reducers';

@Component({
  selector: 'ua-articlePage',
  templateUrl: './artclePage.component.html',
  standalone: true,
  imports: [CommonModule, MatIconModule],
})
export class ArticlePageComponent implements OnInit {
  slug: string = '';

  data$ = combineLatest({
    profile: this.store.select(selectProfile),
    article: this.store.select(selectArticle),
  });
  constructor(private activatedRoute: ActivatedRoute, private store: Store) {}
  ngOnInit(): void {
    this.slug = this.activatedRoute.snapshot.params['slug'];
    this.store.dispatch(feedActions.getSingleArticle({ slug: this.slug }));
    console.log(this.activatedRoute.snapshot.params['slug']);
  }
  followUser(username: string | null | undefined): void {
    if (username)
      this.store.dispatch(
        profileActions.postFollowUser({ username, follow: false })
      );
  }
  unFollowUser(username: string | null | undefined): void {
    if (username)
      this.store.dispatch(
        profileActions.postFollowUser({ username, follow: true })
      );
  }
}
