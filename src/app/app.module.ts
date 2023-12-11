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
import { CategoriesComponent } from './pages/categories/categories.component';
import { CartComponent } from './pages/cart/cart.component';
import { OrderComponent } from './pages/order/order.component';
import { ProductsComponent } from './pages/products/products.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { SellerComponent } from './pages/seller/seller.component';
import { SellerDashboardComponent } from './pages/seller-dashboard/seller-dashboard.component';
import { SliderComponent } from './pages/slider/slider.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    CategoriesComponent,
    CartComponent,
    OrderComponent,
    ProductsComponent,
    ContactUsComponent,
    AboutUsComponent,
    SellerComponent,
    SellerDashboardComponent,
    SliderComponent,
    AdminDashboardComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
