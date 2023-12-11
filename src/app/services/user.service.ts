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

  login(user: any): Observable<any> {
    return this.http.post(`${baseUrl}/login`, user);
  }

  signup(customer: any): Observable<any> {
    return this.http.post(`${baseUrl}/api/customers/createCustomer`, customer);
  }
}
