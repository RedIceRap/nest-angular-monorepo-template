import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { EModalName } from '@app/enums';
import { IUser } from '@app/interfaces';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { SharedService } from '../../shared/services/shared.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentUserSource$ = new BehaviorSubject<IUser | null>(null);
  currentUser$: Observable<IUser | null> = this.currentUserSource$;
  set currentUser(user: IUser | null) {
    this.currentUserSource$.next(user);
  }
  get currentUser(): IUser | null {
    return this.currentUserSource$.getValue();
  }

  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    public router: Router,
    private sharedService: SharedService
  ) {
    this.afAuth.authState
      .pipe(
        tap((user: any) => {
          if (user) {
            this.setUser(user);
          } else {
            this.removeUser();
          }
        })
      )
      .subscribe();
  }

  getUser() {
    const userString = localStorage.getItem('currentUser');

    if (userString) {
      const user = JSON.parse(userString);
      this.currentUser = user;
    }
  }

  setUser(user: IUser) {
    this.currentUser = user;
    localStorage.setItem('currentUser', JSON.stringify(user));
  }

  removeUser() {
    this.currentUser = null;
    localStorage.removeItem('currentUser');
  }

  openLogin() {
    if (this.sharedService.openedModals.includes(EModalName.Signup)) {
      this.closeSignup();
    }
    this.sharedService.openModal = EModalName.Login;
  }

  openSignup() {
    if (this.sharedService.openedModals.includes(EModalName.Login)) {
      this.closeLogin();
    }
    this.sharedService.openModal = EModalName.Signup;
  }

  closeLogin() {
    this.sharedService.closeModal = EModalName.Login;
  }

  closeSignup() {
    this.sharedService.closeModal = EModalName.Signup;
  }

  async signup(data: { email: string; password: string }) {
    const { email, password } = data;

    return this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        this.closeSignup();
        this.sharedService.message = 'Welcome!';
      })
      .catch((e: Error) => {
        this.sharedService.message = e.message;
      });
  }

  async login(data: { email: string; password: string }) {
    const { email, password } = data;
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.closeLogin();
        this.sharedService.message = 'Welcome back!';
      })
      .catch((e: Error) => {
        this.sharedService.message = e.message;
      });
  }

  async logout() {
    await this.afAuth
      .signOut()
      .then(() => {
        this.sharedService.message = 'See you soon!';
      })
      .catch((e: Error) => {
        this.sharedService.message = e.message;
      });
  }

  // setUserData(user: IUser): DocumentData {
  //   const userRef: AngularFirestoreDocument<DocumentData> = this.afs.doc(
  //     `users/${user.uid}`
  //   );

  //   return userRef.set(user, {
  //     merge: true,
  //   });
  // }
}
