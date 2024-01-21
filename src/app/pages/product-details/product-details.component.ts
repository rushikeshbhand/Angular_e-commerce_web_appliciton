import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProductDetailsService } from '../../services/product-details.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productId!: number;

  productDetails: any;

  constructor(private route: ActivatedRoute, private productService: ProductDetailsService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap | null) => {
      this.productId = +params?.get('id')!;
      this.fetchProductDetails();
    });
  }

  fetchProductDetails() {
    this.productService.getProductDetails(this.productId)
      .subscribe(
        (data: any) => {
          this.productDetails = data;
        },
        error => {
          console.error('Error fetching product details', error);
        }
      );
  }
}
