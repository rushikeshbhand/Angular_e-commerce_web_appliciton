// order.component.ts
import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orderItems: any[] = []; // Update the type based on your data structure

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
}
