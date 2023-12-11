import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) {}

  createCategory(category: any): Observable<any> {
    return this.http.post(`${baseUrl}/api/categories/createCategory`, category);
  }

  getAllCategories(): Observable<any> {
    return this.http.get(`${baseUrl}/api/categories/getAllCategories`);
  }

  deleteCategory(categoryId: number): Observable<any> {
    return this.http.delete(`${baseUrl}/api/categories/${categoryId}`);
  }

  updateCategory(category: any): Observable<any> {
    return this.http.put(`${baseUrl}/api/categories/${category.categoryId}`, category);
  }
}
