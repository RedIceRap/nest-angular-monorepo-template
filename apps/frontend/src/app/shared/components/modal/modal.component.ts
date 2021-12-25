import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EModalName } from '@project/enums';
import { SharedService } from '../../services/shared/shared.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  @Input() modalName!: EModalName;
  @Output() closed = new EventEmitter<EModalName>();

  constructor(private sharedService: SharedService) {}

  onClose() {
    this.sharedService.closeModal = this.modalName;
  }
}
