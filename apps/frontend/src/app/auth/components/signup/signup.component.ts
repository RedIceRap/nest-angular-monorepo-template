/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, OnInit } from '@angular/core';
import { EModalName } from '@project/enums';
import { ISignupRequestData } from '@project/interfaces';
import { AuthService } from '../../auth.service';
import { signupForm } from '../../constants/signup-form.constant';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  eModalName = EModalName;
  signupForm = signupForm;

  constructor(public authService: AuthService) {}

  ngOnInit() {}

  onOpenLoginModal() {
    this.authService.openLogin();
  }

  onSubmit(data: ISignupRequestData) {
    this.authService.login(data);
  }
}
