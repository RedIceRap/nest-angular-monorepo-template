import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoreService {
  private drawerStateSource$ = new BehaviorSubject<boolean>(false);
  drawerState$: Observable<boolean> = this.drawerStateSource$;

  setDrawerState(state: boolean) {
    const currentDrawerState = this.getDrawerState();

    if (currentDrawerState !== state) {
      this.drawerStateSource$.next(state);
    }
  }

  getDrawerState(): boolean {
    return this.drawerStateSource$.getValue();
  }

  toggleDrawerState() {
    const currentDrawerState = this.getDrawerState();
    this.setDrawerState(!currentDrawerState);
  }
}
