import { Component } from '@angular/core';
import { EModalName } from '@app/enums';
import { SharedService } from '../../../shared/services/shared.service';
import { navItems } from '../../constants/nav.constant';
import { CoreService } from '../../services/core.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  navItems = navItems;

  constructor(
    public coreService: CoreService,
    private sharedService: SharedService
  ) {}

  openModal(modalName: EModalName) {
    this.sharedService.openModal = modalName;
  }
}
