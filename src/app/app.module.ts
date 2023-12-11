import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './my_component/navbar/navbar.component';
import { FooterComponent } from './my_component/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { CartComponent } from './pages/cart/cart.component';
import { OrderComponent } from './pages/order/order.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { SellerComponent } from './pages/seller/seller.component';
import { SellerDashboardComponent } from './pages/seller-dashboard/seller-dashboard.component';
import { SliderComponent } from './pages/slider/slider.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { ManageCategoriesComponent } from './pages/manage-categories/manage-categories.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
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
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { ProductComponent } from './pages/product/product.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    CartComponent,
    OrderComponent,
    ContactUsComponent,
    AboutUsComponent,
    SellerComponent,
    SellerDashboardComponent,
    SliderComponent,
    AdminDashboardComponent,
    ManageCategoriesComponent,
    ManageProductsComponent,
    ManageCustomersComponent,
    ManageSellersComponent,
    SellerLoginSignupComponent,
    CustomerLoginSignupComponent,
    PageNotWorkingComponent,
    CustomerLoginComponent,
    AddProductsComponent,
    ManageProductComponent,
    AddProductComponent,
    UpdateProductComponent,
    ProductsHomePageComponent,
    ProductDetailsComponent,
    ProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
