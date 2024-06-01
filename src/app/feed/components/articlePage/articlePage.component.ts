import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { feedActions } from '../../store/actions';
import { selectArticle } from '../../store/reducers';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'ua-articlePage',
  templateUrl: './artclePage.component.html',
  standalone: true,
  imports: [CommonModule, MatIconModule],
})
export class ArticlePageComponent implements OnInit {
  slug: string = '';
  data$ = this.store.select(selectArticle);
  constructor(private activatedRoute: ActivatedRoute, private store: Store) {}
  ngOnInit(): void {
    this.slug = this.activatedRoute.snapshot.params['slug'];
    this.store.dispatch(feedActions.getSingleArticle({ slug: this.slug }));
    console.log(this.activatedRoute.snapshot.params['slug']);
  }
}
