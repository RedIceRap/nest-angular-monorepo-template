import { EHtmlElement, EInputType, EModalName, ESubmitName } from '@app/enums';

export interface IFormElement {
  html: EHtmlElement;
  type: EInputType;
  displayName: string;
  formControlName: string;
  id: string;
  required: boolean;
  fxFlex: string;
}

export interface IFormMetadata {
  heading: string;
  modalName: EModalName;
  submitName: ESubmitName;
}

export interface IFormConfig {
  metadata: IFormMetadata;
  elements: IFormElement[];
}
