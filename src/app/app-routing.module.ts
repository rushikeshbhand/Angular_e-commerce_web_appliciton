import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './pages/cart/cart.component';
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
import { ManageCategoriesComponent } from './pages/manage-categories/manage-categories.component';
import { ManageProductsComponent } from './pages/manage-products/manage-products.component';
import { ManageCustomersComponent } from './pages/manage-customers/manage-customers.component';
import { ManageSellersComponent } from './pages/manage-sellers/manage-sellers.component';
import { SellerLoginSignupComponent } from './pages/seller-login-signup/seller-login-signup.component';
import { CustomerLoginSignupComponent } from './pages/customer-login-signup/customer-login-signup.component';
import { PageNotWorkingComponent } from './pages/page-not-working/page-not-working.component';
import { CustomerLoginComponent } from './pages/customer-login/customer-login.component';
import { AddProductsComponent } from './pages/add-products/add-products.component';
import { ManageProductComponent } from './pages/manage-product/manage-product.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { UpdateProductComponent } from './pages/update-product/update-product.component';
import { ProductsHomePageComponent } from './pages/products-home-page/products-home-page.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
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
  { path: 'manage-categories', component: ManageCategoriesComponent},
  { path: 'manage-products', component: ManageProductsComponent},
  { path: 'manage-customers', component: ManageCustomersComponent},
  { path: 'manage-sellers', component: ManageSellersComponent},
  { path: 'seller-login-signup', component: SellerLoginSignupComponent},
  { path: 'customer-login-signup', component: CustomerLoginSignupComponent},
  { path: 'page-not-working', component: PageNotWorkingComponent},
  { path: 'customer-login', component: CustomerLoginComponent},
  { path: 'add-products' , component: AddProductsComponent},
  { path: 'manage-product', component: ManageProductComponent},
  { path: 'add-product', component: AddProductComponent},
  { path: 'update-product', component: UpdateProductComponent},
  { path: 'products-home-page', component: ProductsHomePageComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
