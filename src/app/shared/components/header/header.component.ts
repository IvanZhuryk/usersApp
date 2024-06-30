import { PersistanceService } from './../../services/persistance.service';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectIsLoading } from '../../../auth/store/reducers';
import { authActions } from '../../../auth/store/actions';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ua-header',
  templateUrl: './header.component.html',
  standalone: true,
  imports: [RouterLink, CommonModule],
})
export class HeaderComponent implements OnInit {
  isLoading = this.store.select(selectIsLoading);
  constructor(private ps: PersistanceService, private store: Store) {
    if (this.ps.get('accessToken') != null) {
    }
  }
  logOut() {
    window.localStorage.removeItem('accessToken');
    this.store.dispatch(authActions.logOut());
  }

  ngOnInit(): void {}
}
