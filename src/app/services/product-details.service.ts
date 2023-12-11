import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsService {
  private apiUrl = 'http://localhost:8080/api/products';

  constructor(private http: HttpClient) { }

  getProductDetails(productId: number): Observable<any> {
    const url = `${this.apiUrl}/${productId}`;
    return this.http.get(url);
  }
}
