import { NgModule } from '@angular/core';
import { HomeComponent } from '../modules/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { MatDrawerComponent } from './components/mat-drawer/mat-drawer.component';
import { MatToolbarComponent } from './components/mat-toolbar/mat-toolbar.component';
import { NavComponent } from './components/nav/nav.component';

@NgModule({
  declarations: [
    MatDrawerComponent,
    MatToolbarComponent,
    NavComponent,
    HomeComponent,
  ],
  imports: [SharedModule],
  exports: [MatDrawerComponent],
})
export class CoreModule {}
