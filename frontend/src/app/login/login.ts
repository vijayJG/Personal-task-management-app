import { Component } from '@angular/core';
import { AuthService } from '../auth';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class LoginComponent {

  user = { username: '', password: '' };

  constructor(private auth: AuthService, private router: Router) {}

  login() {
    this.auth.login(this.user).subscribe((res: any) => {
      alert('Login successful');
      localStorage.setItem('userId', res.id);
      this.router.navigate(['/dashboard']);
    });
  }
}