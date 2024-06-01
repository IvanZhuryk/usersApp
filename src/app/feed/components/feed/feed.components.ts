import { Component, OnInit } from '@angular/core';
import { ArticleComponent } from '../article/article.component';
import { Store } from '@ngrx/store';
import { feedActions } from '../../store/actions';
import { combineLatest } from 'rxjs';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

import {
  selectArticles,
  selectArticlesCount,
  selectFilteredArticles,
  selectIsSubmitting,
  selectTags,
  selectValidationErrors,
} from '../../store/reducers';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginationComponent } from '../pagination/pagination.component';

@Component({
  selector: 'ua-feed',
  templateUrl: './feed.component.html',
  standalone: true,
  imports: [
    ArticleComponent,
    CommonModule,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    PaginationComponent,
  ],
})
export class FeedComponent implements OnInit {
  filter: string | undefined = 'All';
  ItemsPerPage = 10;
  currentPage = 1;
  start = 0;
  end = 10;
  tagForm = this.fb.nonNullable.group({
    tag: ['All'],
  });

  constructor(private store: Store, private fb: FormBuilder) {}
  data$ = combineLatest({
    articles: this.store.select(selectArticles),
    articlesCount: this.store.select(selectArticlesCount),
    isSubmitting: this.store.select(selectIsSubmitting),
    errors: this.store.select(selectValidationErrors),
    tags: this.store.select(selectTags),
    filteredArticles: this.store.select(selectFilteredArticles),
  });
  ngOnInit(): void {
    this.store.dispatch(feedActions.getArticles());
    this.store.dispatch(feedActions.getArticlesTags());
    this.start = (this.currentPage - 1) * this.ItemsPerPage;
    this.end = this.start + this.ItemsPerPage;
    this.store.dispatch(feedActions.deleteFilteredArticles());
  }
  filterArticlesByTag() {
    console.log(this.tagForm.get('tag')?.value);
    this.filter = this.tagForm.get('tag')?.value;
    if (this.filter === 'All' || this.filter === undefined) {
      this.store.dispatch(feedActions.deleteFilteredArticles());
    } else {
      this.store.dispatch(feedActions.filterArticles({ tag: this.filter }));
    }
  }

  changePage(page: number) {
    console.log(page);
    this.currentPage = page;
    this.start = (this.currentPage - 1) * this.ItemsPerPage;
    this.end = this.start + this.ItemsPerPage;
  }
}
