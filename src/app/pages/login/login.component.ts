// login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user = {
    username: '',
    password: ''
  };

  constructor(private userService: UserService, private router: Router) {}

  login() {
    alert('form submited successfully');
    this.userService.login(this.user).subscribe(
      (response: any) => {
        // Handle successful login, navigate to the home page
        this.router.navigate(['/home']);
      },
      (error) => {
        // Handle login error, show an error message to the user
        console.error('Login failed:', error);
      }
    );
  }
}
