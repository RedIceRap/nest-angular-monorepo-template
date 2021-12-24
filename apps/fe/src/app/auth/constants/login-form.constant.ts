import {
  EFormControlName,
  EHtmlElement,
  EInputType,
  EModalName,
  ESubmitName,
} from '@app/enums';
import { IFormConfig, IFormElement, IFormMetadata } from '@app/interfaces';

const context = 'login';

export const loginFormElements: IFormElement[] = [
  {
    html: EHtmlElement.Input,
    displayName: 'E-Mail',
    formControlName: EFormControlName.Email,
    id: `${context}-${EFormControlName.Email}`,
    type: EInputType.Email,
    required: true,
    fxFlex: '100%',
  },
  {
    html: EHtmlElement.Input,
    displayName: 'Password',
    formControlName: EFormControlName.Password,
    id: `${context}-${EFormControlName.Password}`,
    type: EInputType.Password,
    required: true,
    fxFlex: '100%',
  },
];

export const metadata: IFormMetadata = {
  heading: 'Login',
  modalName: EModalName.Login,
  submitName: ESubmitName.Login,
};

export const loginForm: IFormConfig = {
  metadata,
  elements: loginFormElements,
};
