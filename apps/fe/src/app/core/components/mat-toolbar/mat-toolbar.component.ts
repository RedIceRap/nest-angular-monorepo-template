import { Component } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { CoreService } from '../../services/core.service';

@Component({
  selector: 'app-mat-toolbar',
  templateUrl: './mat-toolbar.component.html',
  styleUrls: ['./mat-toolbar.component.scss'],
})
export class MatToolbarComponent {
  constructor(
    public coreService: CoreService,
    public authService: AuthService
  ) {}

  onAuth() {
    if (!this.authService.currentUser) {
      this.authService.openLogin();
    } else {
      this.authService.logout();
    }
  }
}
