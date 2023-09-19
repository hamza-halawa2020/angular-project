import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent {
  @Input() myCard: any;
  @Output() emitToParent = new EventEmitter();

  cart !: number;
  constructor(private cartService: CartService) {

  }
  // ngOnInit() {
  //   this
  //     .cartService.getCartVal()
  //     .subscribe(val => this.cart = val)
  // }

  // increase() {
  //   this.cartService.setCartVal(--this.cart)
  // }

  // decrease() {
  //   this.cartService.setCartVal(++this.cart)

  // }
  // addToCart() {
  //   this.emitToParent.emit(this.myCard)
    
  // }

}
