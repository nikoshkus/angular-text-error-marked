import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatFormFieldModule,
  MatInputModule,
  MatCheckboxModule,
  MatSnackBarModule,
  MatTooltipModule
} from '@angular/material';

import { TextErorrComponent } from './text-error.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarRef} from '@angular/material';

@NgModule ({
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    MatTooltipModule
  ],
  declarations: [
    TextErorrComponent
  ],
  providers: [{ provide: MatSnackBarRef, useValue: {} }],
  exports: [
    MatFormFieldModule,
    MatInputModule,
    TextErorrComponent
  ]
})
export class TextErrorModule {}