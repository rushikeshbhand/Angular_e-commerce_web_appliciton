import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-dashboard',
  templateUrl: './seller-dashboard.component.html',
  styleUrls: ['./seller-dashboard.component.css']
})
export class SellerDashboardComponent {
  constructor(private router: Router) {}

  addProduct() {
    this.router.navigate(['/add-product']);
  }

  editProducts() {
    this.router.navigate(['/update-product']);
  }
}
