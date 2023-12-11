// signup.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  customer: any = {};

  constructor(private userService: UserService, private router: Router) {}

  signup(): void {
    this.userService.signup(this.customer).subscribe({
      next: (response) => {
        console.log('Signup successful', response);
        alert('sign up done');
        this.router.navigate(['/home']);
      },
      error: (error) => {
        console.error('Signup failed', error);
        alert('failed to sign up');
      },
    });
  }
}
