import { Component } from '@angular/core';
import { Product } from '../../product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent {

  allProduct: any = 0;
  card: Product[] = [];
  totalPaice: any = 0;



  updateTotal(price: number, quantity: number | undefined) {
    if (quantity !== undefined && quantity >= 0) {
      const total = price * quantity;
      console.log('Total:', total);
    }
  }

  calculateTotal(item: any){
    if (item && item.quantity !== undefined && item.quantity >= 0) {
      return item.price * item.quantity;
    }
    return 0;
  }



  // calculateTotalAllProduct(){


  //   for (const item of this.card) {
  //     if (item && item.price !== undefined && item.price >= 0) {
  //       this.totalPaice += item.price * item.quantity!;
  //     }
  //   }

  //   return this.totalPaice;
  // }

  calculateTotalAllProduct() {
    let total = 0;
  
    for (const item of this.card) {
      if (item && item.quantity !== undefined && item.quantity >= 0) {
        total += item.price * item.quantity;
      }
    }
  
    return total;
  }
  

  constructor(
    private cartApi: CartService
  ) { }

  ngOnInit(): void {
    this.getCartProducts();
  }



  getCartProducts() {

    this.cartApi.getCart().subscribe((data) => {
      this.card = data;
      this.allProduct = this.cartApi.getcounterCart()
    })

  }

  removeProduct(item: any) {
    this.cartApi.removeDate(item)
  }

  removeAllProduct() {
    this.cartApi.removeAllDate()
  }
}
