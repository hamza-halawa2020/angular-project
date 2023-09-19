import { Component, Input } from '@angular/core';
import { Product } from '../../product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  // @Input() card: Product[] = productsData;

  constructor(private router: Router){

  }
  details(id: number){
    this.router.navigate(['product', id])    
  }

  

}
