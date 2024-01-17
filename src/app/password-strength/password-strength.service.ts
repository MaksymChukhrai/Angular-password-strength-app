import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PasswordStrengthService {
  calculateStrength(password: string): string {
    // Implement password strength calculation logic here
    // Return 'easy', 'medium', 'strong' based on the calculation
    return 'gray'; // Замініть це на реальний розрахунок
  }
}
