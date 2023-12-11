import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './pages/cart/cart.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { OrderComponent } from './pages/order/order.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { SellerComponent } from './pages/seller/seller.component';
import { SellerDashboardComponent } from './pages/seller-dashboard/seller-dashboard.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'categories', component:CategoriesComponent},
  { path: 'admin-dashboard', component:AdminDashboardComponent},
  { path: 'products', component: ProductsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'orders', component: OrderComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'contactus', component: ContactUsComponent},
  { path: 'aboutus', component: AboutUsComponent},
  { path: 'seller', component: SellerComponent},
  { path: 'seller-dashboard', component: SellerDashboardComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
