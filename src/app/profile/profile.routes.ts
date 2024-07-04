import { Route } from '@angular/router';
import { ProfilePageComponent } from './profilePage/profilePage.component';

export const ProfileRoutes: Route[] = [
  {
    path: ':username',
    component: ProfilePageComponent,
  },
];
