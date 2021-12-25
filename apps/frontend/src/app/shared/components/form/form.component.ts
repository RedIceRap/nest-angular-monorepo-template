import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { IFormConfig, ILoginRequestData } from '@project/interfaces';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  @Input() formConfig!: IFormConfig;
  @Input() disableHeader = false;
  formGroup!: FormGroup;
  @Output() submited = new EventEmitter<any>();

  ngOnInit() {
    this.formGroup = this.getConstructedForm(this.formConfig);
  }

  getConstructedForm(form: IFormConfig): FormGroup {
    const controls: { [key: string]: AbstractControl } = {};

    form?.elements.forEach((f) => {
      controls[f.formControlName] = new FormControl(
        '',
        f.required ? Validators.required : null
      );
    });

    return new FormGroup(controls);
  }

  onSubmit(data: ILoginRequestData) {
    this.submited.emit(data);
  }
}
