// user.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  //this method is for admin login
  login(user: any): Observable<any> {
    return this.http.post(`${baseUrl}/admins/login`, user);
  }

  //customer signup
  signup(user: any): Observable<any> {
    return this.http.post(`${baseUrl}/api/customers/signup`, user);
  }

  // Customer login
  customerLogin(customer: any): Observable<any> {
    return this.http.post(`${baseUrl}/api/customers/login`, customer);
  }

  //seller login
  sellerLogin(seller: any): Observable<any> {
    return this.http.post(`${baseUrl}/sellers/login`, seller);
  }

  //seller signup
  sellerSignup(seller: any): Observable<any> {
    return this.http.post(`${baseUrl}/sellers/signup`, seller);
  }

  //delete customers
  deleteCustomer(customerId: number): Observable<any> {
    return this.http.delete(`${baseUrl}/api/customers/${customerId}`);
  }
  // delete customer by customer email
  deleteCustomerByEmail(email: string): Observable<any> {
  return this.http.delete(`${baseUrl}/api/customers/${email}`);
  }

  // show all customers
  getAllCustomers(): Observable<any> {
    return this.http.get(`${baseUrl}/api/customers/getAllCustomers`);
  }

  getAllCustomersWithEmail(): Observable<any> {
    return this.http.get(`${baseUrl}/api/customers/getAllCustomers`);
  }

    // delete seller by email
    deleteSellerByEmail(email: string): Observable<any> {
      return this.http.delete(`${baseUrl}/sellers/${email}`);
    }

    // show all sellers with email
    getAllSellersWithEmail(): Observable<any> {
      return this.http.get(`${baseUrl}/sellers/getAllSellers`);
    }
}
