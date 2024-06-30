import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { Store } from '@ngrx/store';
import { PersistanceService } from './shared/services/persistance.service';
import { authActions } from './auth/store/actions';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular_users';
  constructor(private ps: PersistanceService, private store: Store) {
    if (this.ps.get('accessToken') != null) {
      store.dispatch(authActions.getCurrentUser());
    }
  }
}
