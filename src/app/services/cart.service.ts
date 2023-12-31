import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private counterCart = new BehaviorSubject<number>(0);
  private productList = new BehaviorSubject<Product[]>([]);
  cartDataList: Product[] = [];
  constructor() { }

  getCart() {
    return this.productList.asObservable()
  }

  // setCart(myProduct: any) {
  //   this.cartDataList.push(...myProduct);
  //   this.productList.next(myProduct)
  // }

  addProductToCart(myProduct: any) {
    const productAlreadyInCart = this.cartDataList.some((product) => product.id === myProduct.id);

    if (productAlreadyInCart) {
      alert('Product is already in the cart.');
    } else {
      this.cartDataList.push(myProduct);
      this.productList.next(this.cartDataList);
      // this.getAll();
      console.log('hamza', this.cartDataList);
    }

  }


  // getAll() {
  //   let Gtotal = 0;
  //   this.cartDataList.map((a: any) => {
  //     Gtotal += a.total;
  //   })
  // }

  removeDate(myProduct: any) {
    this.cartDataList.map((a: any, index: any) => {
      if (myProduct.id === a.id) {
        this.cartDataList.splice(index, 1)
      }
      this.productList.next(this.cartDataList)

    })
  }

  removeAllDate() {
    this.cartDataList = []
    this.productList.next(this.cartDataList)
  }

  getcounterCart() {
    return this.counterCart.asObservable()
  }


}

