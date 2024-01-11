import { Component } from '@angular/core';

@Component({
  selector: 'app-password-input',
  templateUrl: 'password-input.component.html',
  styleUrls: ['../../styles.scss']
})
export class PasswordInputComponent {
  password: string = '';
  passwordStrength: string = 'Weak';

  checkPassword() {
    if (this.password.length === 0) {
      this.passwordStrength = 'Weak';
    } else if (this.password.length < 8) {
      this.passwordStrength = 'Weak';
    } else if (/[a-zA-Z]/.test(this.password) && /\d/.test(this.password) && /[!@#$%^&*(),.?":{}|<>]/.test(this.password)) {
      this.passwordStrength = 'Strong';
    } else if ((/[a-zA-Z]/.test(this.password) && /\d/.test(this.password)) || (/\d/.test(this.password) && /[!@#$%^&*(),.?":{}|<>]/.test(this.password)) || (/[a-zA-Z]/.test(this.password) && /[!@#$%^&*(),.?":{}|<>]/.test(this.password))) {
      this.passwordStrength = 'Medium';
    } else {
      this.passwordStrength = 'Weak';
    }
  }
}
