import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './all-products/products/products.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { RecoveryComponent } from './user/recovery/recovery.component';
import { CartComponent } from './cart-module/cart/cart.component';
import { ProductDetailsComponent } from './all-products/product-details/product-details.component';


const routes: Routes = [
  {
    path: "",
    component: ProductsComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "recovery",
    component: RecoveryComponent
  },
  {
    path: "cart",
    component: CartComponent
  },
  {
    path: "product/:id",
    component: ProductDetailsComponent
  },
  {
    path: "**",
    component: NotFoundComponent
  }
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
