//-----src\app\app.component.ts

import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { PasswordInputComponent } from './password-input/password-input.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  title = 'password-strength-app';

  @ViewChild(PasswordInputComponent, { static: false }) passwordInput!: PasswordInputComponent;

  ngAfterViewInit(): void {
    // Do any additional initialization or checks after the view and child components are initialized.
  }

  getPasswordStrength(): string {
    return this.passwordInput?.getPasswordStrength() || 'unknown strength';
  }
}



