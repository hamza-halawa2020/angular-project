import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { CardComponent } from './all-products/card/card.component';
import { RecoveryComponent } from './user/recovery/recovery.component';
import { CartComponent } from './cart-module/cart/cart.component';
import { StockPipe } from './pipes/stock.pipe';
import { PricePipe } from './pipes/price.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsComponent } from './all-products/products/products.component';
import { ProductDetailsComponent } from './all-products/product-details/product-details.component';
import { AddToCartComponent } from './all-products/add-to-cart/add-to-cart.component';
import { SharedModule } from './shared/shared.module';
import { AllProductsModule } from './all-products/all-products.module';

import { HttpClientModule } from '@angular/common/http';  // Import HttpClientModule


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    RegisterComponent,
    NotFoundComponent,
    CardComponent,
    RecoveryComponent,
    CartComponent,
    StockPipe,
    ProductDetailsComponent,
    PricePipe,
    AddToCartComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    AllProductsModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
