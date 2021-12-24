import {
  EFormControlName,
  EHtmlElement,
  EInputType,
  EModalName,
  ESubmitName,
} from '@app/enums';
import { IFormConfig, IFormElement, IFormMetadata } from '@app/interfaces';

const context = 'signup';

export const signupFormElements: IFormElement[] = [
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
  {
    html: EHtmlElement.Input,
    displayName: 'Repeat Password',
    formControlName: EFormControlName.PasswordRepeat,
    id: `${context}-${EFormControlName.PasswordRepeat}`,
    type: EInputType.Password,
    required: true,
    fxFlex: '100%',
  },
];

export const metadata: IFormMetadata = {
  heading: 'Signup',
  modalName: EModalName.Signup,
  submitName: ESubmitName.Signup,
};

export const signupForm: IFormConfig = {
  metadata,
  elements: signupFormElements,
};
