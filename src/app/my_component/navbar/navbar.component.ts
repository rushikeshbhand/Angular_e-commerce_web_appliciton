// navbar.component.ts
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  searchQuery: string = '';
  searchResults: any[] = [];

  constructor(private authService: AuthService, private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  logout(): void {
    this.authService.logout();
  }

  searchProducts(): void {
    if (this.searchQuery.trim() !== '') {
      this.productService.searchProducts(this.searchQuery).subscribe(
        (result: any[]) => {
          this.searchResults = result;
        },
        (error) => {
          console.error('Error during search:', error);
        }
      );
    } else {
      this.searchResults = []; // Clear results if search is empty
    }
  }

  // Method to highlight search query in product name
  highlightSearchQuery(productName: string): string {
    const regex = new RegExp(this.searchQuery, 'gi');
    return productName.replace(regex, match => `<span class="highlight">${match}</span>`);
  }

    // Method to handle selection from auto-suggestion
    selectAutoSuggestion(result: any): void {
      console.log('Selected auto-suggestion:', result);

      if (result && result.productId) {
        // still working on product details page
        this.router.navigate(['/product-details', result.productId]);
      }
    }
}

