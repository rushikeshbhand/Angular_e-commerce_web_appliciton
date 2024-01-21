import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent {
  customer: any = {};
  errorMessage: string = '';

  constructor(private userService: UserService, private router: Router) {}

  customerLogin(): void {
    this.userService.customerLogin(this.customer).subscribe(
      (token: string) => {
        localStorage.setItem('customerToken', token);
        this.router.navigate(['/home']);
      },
      (error) => {
        console.error('Login failed', error);

        // Check if the error is an HttpErrorResponse
        if (error instanceof HttpErrorResponse && error.status === 200) {
          // It's not an actual error, but a successful response with status 200
          console.log('Login successful');
        } else {
          // It's a genuine error
          this.errorMessage = 'Invalid email or password';
        }
      }
    );
  }
}
