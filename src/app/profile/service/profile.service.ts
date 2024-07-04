import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ProfileInterface } from '../../shared/types/profile.interface';
import { ProfileResInterface } from '../types/profileRes.Interface';
import { FeedResInterface } from '../../feed/types/feedRes.interface';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private http: HttpClient) {}
  getProfile(username: string): Observable<ProfileInterface> {
    const url = `https://api.realworld.io/api/profiles/${username}`;
    return this.http
      .get<ProfileResInterface>(url)
      .pipe(map((res) => res.profile));
  }
  getUsersArticles(username: string): Observable<FeedResInterface> {
    const url = `https://api.realworld.io/api/articles`;
    return this.http
      .get<FeedResInterface>(url, {
        params: {
          author: username,
        },
      })
      .pipe(map((res) => res));
  }
  postFollowUser(
    username: string,
    follow: boolean
  ): Observable<ProfileInterface> {
    const url = `https://api.realworld.io/api/profiles/${username}/follow`;
    if (follow) {
      return this.http
        .delete<ProfileResInterface>(url)
        .pipe(map((res) => res.profile));
    } else {
      return this.http
        .post<ProfileResInterface>(url, null)
        .pipe(map((res) => res.profile));
    }
  }
}
