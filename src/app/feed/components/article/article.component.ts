import { Component, input, Input, OnInit } from '@angular/core';
import { ProfileInterface } from '../../../shared/types/profile.interface';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { feedActions } from '../../store/actions';

@Component({
  selector: 'ua-article',
  templateUrl: './article.component.html',
  standalone: true,
  imports: [MatIconModule, CommonModule, RouterLink],
})
export class ArticleComponent implements OnInit {
  @Input() author: ProfileInterface = {
    username: '',
    bio: '',
    image: '',
    following: false,
  };
  @Input() favoriteCount: number = 0;
  @Input() title: string = '';
  @Input() body: string = '';
  @Input() tags: string[] = [];
  @Input() createdAt: string = '';
  @Input() slug: string = '';
  @Input() favorited: boolean = false;
  @Input() feedRout: boolean = true;
  constructor(private store: Store) {}
  ngOnInit(): void {}
  handleFavorited(favorited: boolean): void {
    this.store.dispatch(
      feedActions.postFavoriteAtricle({ slug: this.slug, favorite: favorited })
    );
    if (this.favorited) {
      this.favoriteCount = this.favoriteCount - 1;
    } else {
      this.favoriteCount = this.favoriteCount + 1;
    }
    this.favorited = !this.favorited;
  }
}
