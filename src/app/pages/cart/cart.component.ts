// cart.component.ts
import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];

  constructor(private cartService: CartService, private orderService: OrderService) {}

  ngOnInit() {
    this.getCartItems();
  }

  getCartItems() {
    this.cartService.getCartItems().subscribe(
      (items: any[]) => {
        this.cartItems = items;
      },
      (error) => {
        console.error('Error fetching cart items:', error);
      }
    );
  }

  removeFromCart(item: any) {
    this.cartService.removeFromCart(item.product.productId);
  }

  updateQuantity(item: any) {
    this.cartService.updateQuantity(item.product.productId, item.quantity);
  }

  buyNow(item: any) {
    // Move the item to the order
    this.orderService.addToOrder(item);
    // Remove the item from the cart
    this.removeFromCart(item);
  }

  getTotalQuantity(): number {
    return this.cartItems.reduce((total, item) => total + item.quantity, 0);
  }

  getTotalAmount(): number {
    return this.cartItems.reduce((total, item) => total + item.quantity * item.product.productPrice, 0);
  }
}
