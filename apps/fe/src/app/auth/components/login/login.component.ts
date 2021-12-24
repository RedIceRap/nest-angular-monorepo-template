/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, OnInit } from '@angular/core';
import { EModalName } from '@app/enums';
import { ILoginRequestData } from '@app/interfaces';
import { loginForm } from '../../constants/login-form.constant';
import { AuthService } from '../../services/auth.service';

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
