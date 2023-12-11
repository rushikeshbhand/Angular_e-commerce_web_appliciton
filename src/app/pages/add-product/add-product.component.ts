import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  product: any = {}; // Initialize an empty product object

  constructor(private productService: ProductService) {}

  addProduct(): void {
    this.productService.createProduct(this.product).subscribe(
      (response) => {
        console.log('Product added successfully', response);
        alert(this.product.productName  + 'is added successfully');
      },
      (error) => {
        console.error('Error adding product', error);
      }
    );
  }
}

