// order.component.ts
import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orderItems: any[] = [];

  constructor(private orderService: OrderService) {}

  ngOnInit() {
    this.getOrderItems();
  }

  getOrderItems() {
    this.orderService.getOrderItems().subscribe(
      (items: any[]) => {
        this.orderItems = items;
      },
      (error) => {
        console.error('Error fetching order items:', error);
      }
    );
  }

  cancelOrder(orderItem: any): void {
    // Simulate order cancellation by removing the order item from the local array
    const index = this.orderItems.findIndex((item) => item === orderItem);
    if (index !== -1) {
      this.orderItems.splice(index, 1);
      console.log('Order canceled:', orderItem);
    } else {
      console.error('Order not found:', orderItem);
    }
  }
}
