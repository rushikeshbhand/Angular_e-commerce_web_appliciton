import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: any[] = [];
  private cartItemsSubject = new BehaviorSubject<any[]>([]);

  addToCart(product: any): Observable<any[]> {
    const existingItem = this.cartItems.find(item => item.product.productId === product.productId);

    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.cartItems.push({ product, quantity: 1 });
    }

    this.cartItemsSubject.next([...this.cartItems]);

    return this.cartItemsSubject.asObservable();
  }

  removeFromCart(productId: number): void {
    this.cartItems = this.cartItems.filter(item => item.product.productId !== productId);
    this.cartItemsSubject.next([...this.cartItems]);
  }

  updateQuantity(productId: number, newQuantity: number): void {
    const item = this.cartItems.find(item => item.product.productId === productId);

    if (item) {
      item.quantity = newQuantity;
      this.cartItemsSubject.next([...this.cartItems]);
    }
  }

  getCartItems(): Observable<any[]> {
    return this.cartItemsSubject.asObservable();
  }

  clearCart(): void {
    this.cartItems = [];
    this.cartItemsSubject.next([...this.cartItems]);
  }
}
