import { Component, Input, OnInit } from '@angular/core';
import { BackendErrorsInterface } from '../../types/BackendErrors.interface';

@Component({
  selector: 'backend-error-messages',
  templateUrl: './backendErrorMessages.component.html',
  standalone: true,
})
export class BackendErorrMessages implements OnInit {
  @Input() backendErrors: BackendErrorsInterface = {};
  errorMessages: string[] = [];
  ngOnInit(): void {
    this.errorMessages = Object.keys(this.backendErrors).map((name: string) => {
      const messages = this.backendErrors[name].join(' ');
      return `${name} ${messages}`;
    });
  }
}
