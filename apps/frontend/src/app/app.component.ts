/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, OnInit } from '@angular/core';
import { EModalName } from '@project/enums';
import { SharedService } from './shared/services/shared/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'frontend';

  eModalName = EModalName;

  constructor(public sharedService: SharedService) {}

  ngOnInit() {}
}
