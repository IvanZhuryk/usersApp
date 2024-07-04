import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectProfile, selectUsersArticles } from '../store/reducers';
import { profileActions } from '../store/actions';
import { CommonModule } from '@angular/common';
import { combineLatest } from 'rxjs';
import { ArticleComponent } from '../../feed/components/article/article.component';
@Component({
  selector: 'ua-profilePage',
  templateUrl: './profilePage.components.html',
  standalone: true,
  imports: [CommonModule, ArticleComponent],
})
export class ProfilePageComponent implements OnInit {
  username: string = '';

  constructor(private activatedRoute: ActivatedRoute, private store: Store) {}
  data$ = combineLatest({
    profile: this.store.select(selectProfile),
    articles: this.store.select(selectUsersArticles),
  });
  ngOnInit(): void {
    this.username = this.activatedRoute.snapshot.params['username'];
    console.log(this.activatedRoute.snapshot.params['username']);
    this.store.dispatch(profileActions.getProfile({ username: this.username }));
    this.store.dispatch(
      profileActions.getUsersArticles({ username: this.username })
    );
    console.log(this.store.select(selectProfile));
  }
  followUser(): void {
    this.store.dispatch(
      profileActions.postFollowUser({ username: this.username, follow: false })
    );
  }
  unFollowUser(): void {
    this.store.dispatch(
      profileActions.postFollowUser({ username: this.username, follow: true })
    );
  }
}
