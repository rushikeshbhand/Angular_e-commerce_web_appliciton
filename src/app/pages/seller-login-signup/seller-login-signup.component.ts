import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-seller-login-signup',
  templateUrl: './seller-login-signup.component.html',
  styleUrls: ['./seller-login-signup.component.css']
})
export class SellerLoginSignupComponent {
  showLogin: boolean = true;
  sellerEmail: string = '';
  sellerPassword: string = '';
  sellerFirstName: string = '';
  sellerLastName: string = '';
  sellerContact: string = '';
  sellerAddress: string = '';

  constructor(private userService: UserService, private router: Router) {}

  sellerLogin(): void {
    const sellerCredentials = { sellerEmail: this.sellerEmail, sellerPassword: this.sellerPassword };
    this.userService.sellerLogin(sellerCredentials).subscribe(
      (response) => {
        //successful login
        console.log('Seller login successful', response);
        this.router.navigate(['/seller-dashboard']);

      },
      (error) => {
        console.error('Seller login failed', error);
        // login error
      }
    );
  }

  sellerSignup(): void {
    const sellerData = {
      sellerFirstName: this.sellerFirstName,
      sellerLastName: this.sellerLastName,
      sellerEmail: this.sellerEmail,
      sellerPassword: this.sellerPassword,
      sellerContact: this.sellerContact,
      sellerAddress: this.sellerAddress
    };
    this.userService.sellerSignup(sellerData).subscribe(
      (response) => {
        console.log('Seller signup successful', response);
        this.showLogin = true;
        alert('signup successful');
        this.router.navigate(['/seller-dashboard']);
      },
      (error) => {
        console.error('Seller signup failed', error);
      }
    );
  }
}
