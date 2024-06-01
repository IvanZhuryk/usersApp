import { BackendErrorsInterface } from '../../shared/types/BackendErrors.interface';
import { CurrentUserInterface } from '../../shared/types/currentUser.interface';
import { LoginReqInterface } from '../types/loginReq.interface';
import { RegisterReqInterface } from './../types/registerReq.interface';
import { createActionGroup, props } from '@ngrx/store';

export const authActions = createActionGroup({
  source: 'auth',
  events: {
    Register: props<{ request: RegisterReqInterface }>(),
    'Register Success': props<{ currentUser: CurrentUserInterface }>(),
    'Register Failure': props<{ errors: BackendErrorsInterface }>(),
    Login: props<{ request: LoginReqInterface }>(),
    'Login Success': props<{ currentUser: CurrentUserInterface }>(),
    'Login Failure': props<{ errors: BackendErrorsInterface }>(),
  },
});
