import { Component } from '@angular/core';
import { EModalName } from '@project/enums';
import { SharedService } from '../../../shared/services/shared/shared.service';
import { navItems } from '../../constants';
import { CoreService } from '../../services/core/core.service';

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
