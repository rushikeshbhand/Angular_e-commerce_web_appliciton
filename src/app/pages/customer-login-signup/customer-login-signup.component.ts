import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-customer-login-signup',
  templateUrl: './customer-login-signup.component.html',
  styleUrls: ['./customer-login-signup.component.css']
})
export class CustomerLoginSignupComponent {
  showLogin: boolean = true;
  customerForm: FormGroup;
  errorMessage: string = '';
  customer: any = {};

  constructor(private userService: UserService, private authService: AuthService , private fb: FormBuilder, private router: Router) {
    this.customerForm = this.fb.group({
      customerFirstName: ['', Validators.required],
      customerLastName: ['', Validators.required],
      customerEmail: ['', Validators.required],
      customerPassword: ['', Validators.required],
      customerAddress: ['', Validators.required],
      customerPhoneNo: ['', Validators.required],
    });
  }

  customerLogin(): void {
    this.customer = this.customerForm.value;
    this.userService.customerLogin(this.customer).subscribe(
      (token: string) => {
        localStorage.setItem('customerToken', token);
        this.router.navigate(['home']);
      },
      (error) => {
        console.error('Login failed', error);

        // Checking if the error is an HttpErrorResponse
        if (error instanceof HttpErrorResponse && error.status === 200) {
          // It's not an actual error, but a successful response with status 200
          console.log('Login successful');
        } else {
          this.errorMessage = 'Invalid email or password';
        }
      }
    );
  }


  signup(): void {
    this.userService.signup(this.customerForm.value).subscribe(
      (response) => {
        console.log('Signup successful', response);
        this.showLogin = true;
        alert('Signup successful');
        this.router.navigate(['/home']);
      },
      (error) => {
        console.error('Signup failed', error);
      }
    );
  }
}
