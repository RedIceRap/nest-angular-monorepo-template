import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { LayerComponent } from './components/layer/layer.component';
import { ModalComponent } from './components/modal/modal.component';
import { SnackBarComponent } from './components/snack-bar/snack-bar.component';
import { AngularMaterialModules } from './exports';

@NgModule({
  declarations: [
    FormComponent,
    LayerComponent,
    ModalComponent,
    SnackBarComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    ...AngularMaterialModules,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HttpClientModule,
    RouterModule,
    FormComponent,
    LayerComponent,
    ModalComponent,
    SnackBarComponent,
    ...AngularMaterialModules,
  ],
})
export class SharedModule {}
