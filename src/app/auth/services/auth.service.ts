import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterReqInterface } from '../types/registerReq.interface';
import { map, Observable } from 'rxjs';
import { CurrentUserInterface } from '../../shared/types/currentUser.interface';
import { AuthResInterface } from '../types/authRespons.interface';
import { LoginReqInterface } from '../types/loginReq.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  register(data: RegisterReqInterface): Observable<CurrentUserInterface> {
    const url = 'https://api.realworld.io/api/users';
    return this.http
      .post<AuthResInterface>(url, data)
      .pipe(map((response) => response.user));
  }
  login(data: LoginReqInterface): Observable<CurrentUserInterface> {
    const url = 'https://api.realworld.io/api/users/login';
    return this.http
      .post<AuthResInterface>(url, data)
      .pipe(map((response) => response.user));
  }
  getCurrentUser(): Observable<CurrentUserInterface> {
    const url = 'https://api.realworld.io/api/user';
    return this.http.get<AuthResInterface>(url).pipe(map((res) => res.user));
  }
}
