import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  admin: any = {};
  errorMessage: string = '';

  constructor(private userService: UserService, private authService: AuthService, private router: Router) {}


  login(): void {
    this.userService.login(this.admin).subscribe(
      (token: string) => {
        localStorage.setItem('adminToken', token);
        this.router.navigate(['/admin-dashboard']);
      },
      (error) => {
        if (error instanceof HttpErrorResponse && error.status === 200) {
          console.log('Login successful');
        } else {
          this.errorMessage = 'Invalid email or password';
        }
      }
    );
  }

}
