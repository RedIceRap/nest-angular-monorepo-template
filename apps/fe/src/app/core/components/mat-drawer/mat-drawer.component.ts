/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../shared/services/shared.service';
import { CoreService } from '../../services/core.service';

@Component({
  selector: 'app-mat-drawer',
  templateUrl: './mat-drawer.component.html',
  styleUrls: ['./mat-drawer.component.scss'],
})
export class MatDrawerComponent implements OnInit {
  constructor(
    public coreService: CoreService,
    public sharedService: SharedService
  ) {}

  ngOnInit() {}

  openedChange(state: boolean) {
    if (this.coreService.getDrawerState() !== state) {
      this.coreService.setDrawerState(state);
    }
  }
}
