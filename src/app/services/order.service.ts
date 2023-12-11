import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private orderItems: any[] = [];
  private orderItemsSubject = new BehaviorSubject<any[]>([]);

  createOrder(product: any): Observable<any[]> {
    const existingItem = this.orderItems.find(item => item.product.productId === product.productId);

    if (existingItem) {
      existingItem.quantity++;
      existingItem.totalPrice += product.productPrice;
    } else {
      this.orderItems.push({ product, quantity: 1, totalPrice: product.productPrice });
    }

    this.orderItemsSubject.next([...this.orderItems]);

    return this.orderItemsSubject.asObservable();
  }

  getOrderItems(): Observable<any[]> {
    return this.orderItemsSubject.asObservable();
  }

  clearOrders() {
    this.orderItems = [];
    this.orderItemsSubject.next([...this.orderItems]);
  }
}
