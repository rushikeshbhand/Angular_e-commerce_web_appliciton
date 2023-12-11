import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.css']
})
export class ManageProductComponent {
  productToDelete: string = '';

  allProducts: any[] = [];

  constructor(private productService: ProductService) {}

  // delete product
  deleteProduct(): void {
    if (!this.productToDelete) {
      console.error('Please enter a product name to delete');
      return;
    }

    this.productService.deleteProductByName(this.productToDelete).subscribe(
      (response) => {
        console.log(response);
        this.getAllProducts();
      },
      (error) => {
        console.error('Error deleting product', error);
      }
    );
  }

  // get all products
  getAllProducts(): void {
    this.productService.getAllProducts().subscribe(
      (response) => {
        console.log('All products:', response);
        this.allProducts = response;
      },
      (error) => {
        console.error('Error fetching products', error);
      }
    );
  }
}
