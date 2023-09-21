import { Component } from '@angular/core';
import { NewProductService } from 'src/app/services/new-product.service';
import { Router } from '@angular/router';
import { Product } from '../../product';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  constructor(
    private service: NewProductService,
    private router: Router
  ) { }
  products: any = [];
  loading: boolean = false;

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.loading = true;
    this.service.getAllProductsssss().subscribe(
      (res) => {
        this.products = Object.values(res)[0];
        this.loading = false;
      },
      err => {
        console.log(err);
        alert("An error occurred while fetching products.");
      }
    );
  }

  details(id: number) {
    this.router.navigate(['product', id]);
  }

}



