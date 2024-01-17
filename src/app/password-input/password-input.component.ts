//----src\app\password-input\password-input.component.ts

import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { PasswordStrengthService } from '../password-strength/password-strength.service';

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PasswordInputComponent),
      multi: true,
    },
  ],
})
export class PasswordInputComponent implements ControlValueAccessor {
  @Input() placeholder: string = '';
  password: string = '';

  constructor(
    private passwordStrengthService: PasswordStrengthService,
  ) {}

  onChange: any = () => {};
  onTouched: any = () => {};

  writeValue(value: any): void {
    this.password = value;
    this.onChange(value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {}

  updatePassword(value: string): void {
    this.password = value;
    this.onChange(value);
    this.onTouched();
  }

  getPasswordStrength(): string {
    return this.passwordStrengthService.calculateStrength(this.password);
  }

  onInput(): void {
    // Ваш код обробників події input тут, якщо потрібно
  }
}
