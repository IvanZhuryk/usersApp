import { PersistanceService } from './../../services/persistance.service';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'ua-header',
  templateUrl: './header.component.html',
  standalone: true,
  imports: [RouterLink],
})
export class HeaderComponent {
  isLoading = false;
  constructor(private ps: PersistanceService) {
    if (this.ps.get('accessToken') != null) {
      this.isLoading = true;
    }
  }
}
