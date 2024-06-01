import { Component, input, Input } from '@angular/core';
import { ProfileInterface } from '../../../shared/types/profile.interface';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'ua-article',
  templateUrl: './article.component.html',
  standalone: true,
  imports: [MatIconModule, CommonModule, RouterLink],
})
export class ArticleComponent {
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
}
