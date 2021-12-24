/* eslint-disable @typescript-eslint/no-empty-function */
import { Injectable } from '@angular/core';
import { EModalName } from '@app/enums';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private openedModalsSource$ = new BehaviorSubject<Array<EModalName>>([]);
  openedModals$: Observable<Array<EModalName>> = this.openedModalsSource$;

  private messageSource$ = new BehaviorSubject<string | null>(null);
  message$: Observable<string | null> = this.messageSource$;

  constructor() {}

  set openModal(modalName: EModalName) {
    if (!this.openedModals.includes(modalName)) {
      this.openedModalsSource$.next([...this.openedModals, modalName]);
    }
  }

  set closeModal(modalName: EModalName) {
    if (this.openedModals.includes(modalName)) {
      this.openedModalsSource$.next(
        this.openedModals.filter((m) => m !== modalName)
      );
    }
  }

  set toggleModal(modalName: EModalName) {
    if (!this.openedModals.includes(modalName)) {
      this.openModal = modalName;
    } else {
      this.closeModal = modalName;
    }
  }

  get openedModals(): Array<EModalName> {
    return this.openedModalsSource$.getValue();
  }

  set message(message: string | null) {
    this.messageSource$.next(message);
    setTimeout(() => this.messageSource$.next(null), 3000);
  }

  get message(): string | null {
    return this.messageSource$.getValue();
  }
}
