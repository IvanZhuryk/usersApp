import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideState, provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { authFeatureKey, authReducer } from './auth/store/reducers';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideEffects } from '@ngrx/effects';
import * as authEffects from './auth/store/effects';
import * as feedEffects from './feed/store/effects';
import * as profileEffects from './profile/store/effects';
import { AuthInterceptor } from './shared/services/auth-interceptor.service';
import { feedFeatureKey, feedReducer } from './feed/store/reducers';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { profileFeatureKey, profileReducer } from './profile/store/reducers';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withInterceptors([AuthInterceptor])),
    provideEffects([authEffects, feedEffects, profileEffects]),
    provideRouter(routes),
    provideStore(),
    provideState(authFeatureKey, authReducer),
    provideState(feedFeatureKey, feedReducer),
    provideState(profileFeatureKey, profileReducer),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
      trace: false,
      traceLimit: 75,
    }),
    provideAnimationsAsync(),
  ],
};
