import { Component } from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { authActions } from '../../store/actions';
import { RegisterReqInterface } from '../../types/registerReq.interface';

import { CommonModule } from '@angular/common';
import {
  selectIsSubmitting,
  selectValidationErrors,
} from '../../store/reducers';
import { combineLatest } from 'rxjs';
import { BackendErorrMessages } from '../../../shared/components/backendErrorMassages/backendErrorMessages.components';
import { LoginReqInterface } from '../../types/loginReq.interface';

@Component({
  selector: 'ua-register',
  templateUrl: './register.component.html',
  standalone: true,
  imports: [
    RouterLink,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    BackendErorrMessages,
  ],
})
export class RegisterComponent {
  haveAcount: boolean = true;
  registerForm = this.fb.nonNullable.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
  });
  loginForm = this.fb.nonNullable.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });
  data$ = combineLatest({
    isSubmiting: this.store.select(selectIsSubmitting),
    backendErrors: this.store.select(selectValidationErrors),
  });
  constructor(private fb: FormBuilder, private store: Store) {}
  onSubmit() {
    if (this.haveAcount) {
      const request: LoginReqInterface = {
        user: this.loginForm.getRawValue(),
      };
      this.store.dispatch(authActions.login({ request }));
    } else {
      console.log('form', this.registerForm.getRawValue());
      const request: RegisterReqInterface = {
        user: this.registerForm.getRawValue(),
      };
      this.store.dispatch(authActions.register({ request }));
    }
  }
  onSwitchMode() {
    this.haveAcount = !this.haveAcount;
  }
}
