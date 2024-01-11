//------password-strength-app\src\app\app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PasswordInputComponent } from './password-input/password-input.component';
import { PasswordStrengthComponent } from './password-strength/password-strength.component';

@NgModule({
  declarations: [
    AppComponent,
    PasswordInputComponent,
    PasswordStrengthComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }

