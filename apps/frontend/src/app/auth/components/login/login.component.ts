/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, OnInit } from '@angular/core';
import { EModalName } from '@project/enums';
import { ILoginRequestData } from '@project/interfaces';
import { AuthService } from '../../auth.service';
import { loginForm } from '../../constants/login-form.constant';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  eModalName = EModalName;
  loginForm = loginForm;

  constructor(private authService: AuthService) {}

  ngOnInit() {}

  onOpenSignupModal() {
    this.authService.openSignup();
  }

  onSubmit(data: ILoginRequestData) {
    this.authService.login(data);
  }
}
