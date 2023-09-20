import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private counterCart = new BehaviorSubject<number>(0);
  // private total = new BehaviorSubject<number>(0);
  private productList = new BehaviorSubject<Product[]>([]);
  cartDataList: Product[] = [];
  constructor(private http: HttpClient) { }

  // getCartVal() {
  //   return this.cart.asObservable()
  // }

  // setCartVal(newVal: number) {
  //   this.cart.next(newVal);
  // }

  getCart() {
    return this.productList.asObservable()
  }

  setCart(myProduct: any) {
    this.cartDataList.push(...myProduct);
    this.productList.next(myProduct)
  }

  addProductToCart(myProduct: any) {
  // Check if the product already exists in the cart
  const productAlreadyInCart = this.cartDataList.some((product) => product.id === myProduct.id);

  if (productAlreadyInCart) {
    alert('Product is already in the cart.');
  } else {
    this.cartDataList.push(myProduct);
    this.productList.next(this.cartDataList);
    this.getAll();
    console.log('hamza', this.cartDataList);
  }
}


  getAll() {
    let Gtotal = 0;
    this.cartDataList.map((a: any) => {
      Gtotal += a.total;
    })
  }

  removeDate(myProduct: any) {
    this.cartDataList.map((a: any, index: any) => {
      if (myProduct.id === a.id) {
        this.cartDataList.splice(index, 1)
      }
    })
  }

  removeAllDate() {
    this.cartDataList = []
    this.productList.next(this.cartDataList)
  }

  getcounterCart() {
    return this.counterCart.asObservable()
  }

  // getTotal() {
  //   const myCart = this.cart.getValue();
  //   let price = 0;
  //   myCart.forEach((myProduct) => {
  //     price += myProduct.price * myProduct.quantity;
  //   })
  //   this.total.next(price)
  //   return this.total.asObservable()
  // }

  // addToCart(myProduct: Product) {

  //   const myCart = this.cart.getValue();
  //   myCart.push({...myProduct, quantity: 1});
  //   this.cart.next(myCart);
  //   this.counterCart.next(myCart.length);

  //   this.getTotal();
  // }

}

