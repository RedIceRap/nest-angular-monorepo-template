import { NgModule } from '@angular/core';
import { AdminModule } from '../admin/admin.module';
import { AuthModule } from '../auth/auth.module';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './components/home/home.component';
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
  imports: [SharedModule, AuthModule, AdminModule],
  exports: [MatDrawerComponent],
})
export class CoreModule {}
