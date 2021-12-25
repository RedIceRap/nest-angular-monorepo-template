import { EModalName } from '@project/enums';

export interface ILoginModal {
  displayName: 'Login';
  modalName: EModalName.Login;
}

export interface ISignupModal {
  displayName: 'Signup';
  modalName: EModalName.Signup;
}

export interface ILoginRequestData {
  email: string;
  password: string;
}

export interface ISignupRequestData extends ILoginRequestData {
  repeatPassword: string;
}
