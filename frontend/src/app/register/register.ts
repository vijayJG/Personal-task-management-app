import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class RegisterComponent {

  user = { username: '', password: '' };

  constructor(private auth: AuthService, private router: Router) {}

  register() {
    this.auth.register(this.user).subscribe({
      next: () => {
        alert('Registered successfully');
        this.router.navigate(['/']);
      },
      error: () => {
        alert('Registration failed');
      }
    });
  }
}