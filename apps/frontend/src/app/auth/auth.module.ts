import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../../environments/environment';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent, SignupComponent } from './components';

@NgModule({
  declarations: [LoginComponent, SignupComponent],
  imports: [
    SharedModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
  ],
  exports: [
    LoginComponent,
    SignupComponent,
    SharedModule,
    AngularFireModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
  ],
})
export class AuthModule {}
