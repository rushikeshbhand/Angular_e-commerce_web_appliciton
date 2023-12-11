import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent {
  newProduct: any = {};

  constructor(private productService: ProductService) {}

  addProduct() {
    this.productService.createProduct(this.newProduct).subscribe(
      (response) => {
        console.log('Product added successfully:', response);
        alert(this.newProduct.productName+'is added successfully')
      },
      (error) => {
        console.error('Error adding product:', error);
      }
    );
  }
}
