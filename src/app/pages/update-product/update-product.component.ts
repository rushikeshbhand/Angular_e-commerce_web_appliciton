import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent {
  product: any = {}; // Initialize an empty product object

  constructor(private productService: ProductService) {}

  updateProduct(): void {
    this.productService.updateProduct(this.product.productId, this.product).subscribe(
      (response) => {
        console.log('Product updated successfully', response);
        alert(this.product.productName  + 'is update successfully');
      },
      (error) => {
        console.error('Error updating product', error);
      }
    );
  }
}
