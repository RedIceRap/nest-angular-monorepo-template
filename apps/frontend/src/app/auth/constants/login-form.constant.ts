import {
  EFormControlName,
  EHtmlElement,
  EInputType,
  EModalName,
  ESubmitName,
} from '@project/enums';
import { IFormConfig, IFormElement, IFormMetadata } from '@project/interfaces';

const context = 'login';

const elements: IFormElement[] = [
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

const metadata: IFormMetadata = {
  heading: 'Login',
  modalName: EModalName.Login,
  submitName: ESubmitName.Login,
};

export const loginForm: IFormConfig = {
  metadata,
  elements,
};
