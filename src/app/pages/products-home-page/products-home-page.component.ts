import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { OrderService } from '../../services/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-home-page',
  templateUrl: './products-home-page.component.html',
  styleUrls: ['./products-home-page.component.css'],
})
export class ProductsHomePageComponent implements OnInit {
  products: any[] = [];

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private orderService: OrderService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getAllProducts().subscribe(
      (data) => {
        this.products = data;
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }

  addToCart(product: any) {
    this.cartService.addToCart(product).subscribe(
      (response: any) => {
        console.log('Product added to cart:', product);
      },
      (error: any) => {
        console.error('Error adding product to cart:', error);
      }
    );
  }

  buyNow(product: any) {
    this.orderService.createOrder(product).subscribe(
      (response: any) => {
        console.log('Product bought:', product);
      },
      (error: any) => {
        console.error('Error creating order:', error);
      }
    );
  }

  viewProductDetails(product: any) {
    this.router.navigate(['/product-details', product.productId]);
  }
}
