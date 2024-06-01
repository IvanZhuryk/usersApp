import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

export const canActivate = (
  router: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): boolean | UrlTree | Observable<boolean | UrlTree> => {
  const route = inject(Router);
  if (window.localStorage.getItem('accessToken')) {
    return true;
  } else {
    return route.createUrlTree(['/auth']);
  }
};
