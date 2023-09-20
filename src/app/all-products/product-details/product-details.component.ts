import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../product';
import { NewProductService } from 'src/app/services/new-product.service';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

  card!: any;
  getAllProducts: Product[] = [];

  constructor(
    private activeRoute: ActivatedRoute,
    private linkService: NewProductService,
    private cartApi: CartService
  ) { }

  ngOnInit(): void {
    const productId = +this.activeRoute.snapshot.params['id'];

    this.linkService.getProductsssssById(productId).subscribe((res) => {
      console.log(res);
      this.card = res;
      Object.assign(this.card, { quantity: 1, total: this.card.price });
    });





  }
  addProdutToCart(item: any) {
    this.cartApi.addProductToCart(item)
  }




}


