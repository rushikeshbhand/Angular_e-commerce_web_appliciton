// auth.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isLoggedIn(): boolean {
    const token = localStorage.getItem('adminToken');
    return !!token;
  }

  logout(): void {
    localStorage.removeItem('adminToken');
  }
}
