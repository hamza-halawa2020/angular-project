import { Component } from '@angular/core';
import { Product } from '../../product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent {

  allProduct:any= 0;
  card: Product[] = [];

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
      // this.getAllProducts = Object.values(data)[0]
    })

  }

  removeProduct(item:any){
    this.cartApi.removeDate(item)
  }

  removeAllProduct(){
    this.cartApi.removeAllDate()
  }
}
