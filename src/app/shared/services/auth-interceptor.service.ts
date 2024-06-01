import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { PersistanceService } from './persistance.service';

export const AuthInterceptor: HttpInterceptorFn = (req, next) => {
  const persistanceService = inject(PersistanceService);
  const token = persistanceService.get('accessToken');
  if (token) {
    const authReq = req.clone({
      setHeaders: {
        Authorization: `Token ${token}`,
      },
    });
    return next(authReq);
  }
  return next(req);
};
