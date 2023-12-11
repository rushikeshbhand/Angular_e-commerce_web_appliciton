import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = 'http://localhost:8080/api/products';

  constructor(private http: HttpClient) {}

  createProduct(product: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/createProduct`, product);
  }

  updateProduct(productId: number, product: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${productId}`, product);
  }

    // delete product by name
    deleteProductByName(productName: string): Observable<any> {
      return this.http.delete(`${this.baseUrl}/deleteProductByName/${productName}`);
    }

    // get all products
    getAllProducts(): Observable<any> {
      return this.http.get(`${this.baseUrl}/getAllProducts`);
    }

    searchProducts(query: string): Observable<any[]> {
      return this.http.get<any[]>(`${this.baseUrl}/searchProducts/${query}`);
    }

}
