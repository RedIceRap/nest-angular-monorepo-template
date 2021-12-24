import { Component } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-snack-bar',
  templateUrl: 'snack-bar.component.html',
  styleUrls: ['snack-bar.component.scss'],
})
export class SnackBarComponent {
  constructor(public sharedService: SharedService) {}
}
