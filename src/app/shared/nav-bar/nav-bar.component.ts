import { Component } from '@angular/core';
import { RouterLinkActive } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  totalNumber: number = 0;
  constructor(private cartApi: CartService) { }

  ngOnInit(): void {
    this.cartApi.getCart().subscribe((res) => {
      this.totalNumber = res.length
    })
  }

}
